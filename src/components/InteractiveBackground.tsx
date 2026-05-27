import React, { useEffect, useRef, useState } from 'react';

export const InteractiveBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const initialTheme = document.documentElement.getAttribute('data-theme');
    return initialTheme === 'light' ? 'light' : 'dark';
  });

  // Track theme changes by observing document element data attributes
  useEffect(() => {
    const observer = new MutationObserver(() => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      setTheme(currentTheme === 'light' ? 'light' : 'dark');
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Mouse coordinates
    const mouse = { x: width / 2, y: height / 2, tx: width / 2, ty: height / 2 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.tx = e.clientX;
      mouse.ty = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // --- LIQUID ETHER EFFECT STATE (Dark Mode) ---
    const blobs = [
      { x: width * 0.2, y: height * 0.3, vx: 0.8, vy: 1.1, radius: 250, color: 'rgba(0, 240, 255, 0.09)' }, // Cyan
      { x: width * 0.8, y: height * 0.7, vx: -1.0, vy: -0.8, radius: 300, color: 'rgba(139, 92, 246, 0.08)' }, // Purple
      { x: width * 0.5, y: height * 0.5, vx: 0.5, vy: -0.6, radius: 220, color: 'rgba(0, 255, 102, 0.05)' }, // Green
      { x: width * 0.3, y: height * 0.8, vx: -0.7, vy: 0.9, radius: 280, color: 'rgba(139, 92, 246, 0.07)' }, // Purple
    ];

    // --- LIGHT PILLAR EFFECT STATE (Light Mode) ---
    const pillars = [
      { x: width * 0.15, tx: width * 0.15, speed: 0.005, width: 120, opacity: 0.25 },
      { x: width * 0.45, tx: width * 0.45, speed: 0.003, width: 180, opacity: 0.2 },
      { x: width * 0.75, tx: width * 0.75, speed: 0.004, width: 150, opacity: 0.22 },
      { x: width * 0.9, tx: width * 0.9, speed: 0.002, width: 100, opacity: 0.18 },
    ];

    const draw = () => {
      // Smooth mouse follow
      mouse.x += (mouse.tx - mouse.x) * 0.05;
      mouse.y += (mouse.ty - mouse.y) * 0.05;

      if (theme === 'dark') {
        // Clear background with deep cyber space backdrop
        ctx.fillStyle = '#030508';
        ctx.fillRect(0, 0, width, height);

        // Update and draw liquid blobs
        blobs.forEach((blob) => {
          blob.x += blob.vx;
          blob.y += blob.vy;

          if (blob.x - blob.radius < 0 || blob.x + blob.radius > width) blob.vx *= -1;
          if (blob.y - blob.radius < 0 || blob.y + blob.radius > height) blob.vy *= -1;

          // React to mouse: attract slightly
          const dx = mouse.x - blob.x;
          const dy = mouse.y - blob.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 400) {
            blob.x += (dx / dist) * 0.5;
            blob.y += (dy / dist) * 0.5;
          }

          const gradient = ctx.createRadialGradient(blob.x, blob.y, 0, blob.x, blob.y, blob.radius);
          gradient.addColorStop(0, blob.color);
          gradient.addColorStop(0.5, blob.color.replace(/[\d.]+\)$/, '0.03)'));
          gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2);
          ctx.fill();
        });

        // Add subtle connection lines or fluid grid scan lines
        ctx.strokeStyle = 'rgba(0, 240, 255, 0.015)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        for (let i = 0; i < width; i += 60) {
          ctx.moveTo(i, 0);
          ctx.lineTo(i + (mouse.x - width / 2) * 0.05, height);
        }
        ctx.stroke();
      } else {
        // Clear background with crisp slate white
        ctx.fillStyle = '#f8fafc';
        ctx.fillRect(0, 0, width, height);

        // Draw pillars
        pillars.forEach((pillar, i) => {
          pillar.tx += Math.sin(Date.now() * 0.0005 + i) * 0.2;
          pillar.x += (pillar.tx - pillar.x) * 0.05;

          const mxInfluence = (mouse.x - width / 2) * 0.15;
          const currentX = pillar.x + mxInfluence * (i % 2 === 0 ? 1 : -0.5);

          const gradient = ctx.createLinearGradient(currentX - pillar.width / 2, 0, currentX + pillar.width / 2, 0);
          gradient.addColorStop(0, 'rgba(2, 132, 199, 0)');
          gradient.addColorStop(0.5, `rgba(2, 132, 199, ${pillar.opacity})`);
          gradient.addColorStop(1, 'rgba(2, 132, 199, 0)');

          ctx.fillStyle = gradient;
          ctx.fillRect(currentX - pillar.width / 2, 0, pillar.width, height);

          ctx.strokeStyle = `rgba(2, 132, 199, ${pillar.opacity * 0.3})`;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(currentX, 0);
          ctx.lineTo(currentX + (mouse.x - width / 2) * 0.02, height);
          ctx.stroke();
        });
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -2,
        pointerEvents: 'none',
      }}
    />
  );
};

export default InteractiveBackground;
