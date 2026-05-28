import React, { useState, useRef, useEffect } from 'react';

interface TiltedCardProps {
  children: React.ReactNode;
  maxRotate?: number; // Maximum rotation in degrees
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export const TiltedCard: React.FC<TiltedCardProps> = ({
  children,
  maxRotate = 8,
  className = '',
  style = {},
  onClick,
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [rotateX, setRotateX] = useState<number>(0);
  const [rotateY, setRotateY] = useState<number>(0);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isFocused, setIsFocused] = useState(false);
  const [shadowStyle, setShadowStyle] = useState<string>('0 8px 30px rgba(0,0,0,0.3)');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };
    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile) return;
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Mouse coordinates relative to card
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });

    // Mouse coordinates relative to card center
    const mouseX = x - width / 2;
    const mouseY = y - height / 2;

    const targetRotateY = (mouseX / (width / 2)) * maxRotate;
    const targetRotateX = -(mouseY / (height / 2)) * maxRotate;

    setRotateX(targetRotateX);
    setRotateY(targetRotateY);

    const shadowX = -targetRotateY * 1.5;
    const shadowY = targetRotateX * 1.5;
    setShadowStyle(`${shadowX}px ${shadowY}px 35px var(--border-color), 0 8px 30px rgba(0,0,0,0.3)`);
  };

  const handleMouseEnter = () => {
    setIsFocused(true);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsFocused(false);
    setShadowStyle('0 8px 30px rgba(0,0,0,0.3)');
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={className}
      style={{
        ...style,
        transform: isMobile ? 'none' : `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`,
        transition: 'transform 0.15s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.15s ease, border-color 0.3s ease, background 0.3s ease',
        boxShadow: isMobile ? '0 8px 30px rgba(0,0,0,0.3)' : shadowStyle,
        cursor: onClick ? 'pointer' : 'default',
        transformStyle: isMobile ? 'flat' : 'preserve-3d',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Spotlight Cursor Glow Overlay */}
      {isFocused && !isMobile && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            pointerEvents: 'none',
            background: `radial-gradient(circle 200px at ${coords.x}px ${coords.y}px, var(--border-glow), transparent 75%)`,
            opacity: 0.15,
            zIndex: 0,
            transition: 'opacity 0.2s ease',
          }}
        />
      )}

      {/* 3D Child Wrapper for extra pop */}
      <div style={{ transform: 'translateZ(12px)', height: '100%', zIndex: 1, position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        {children}
      </div>
    </div>
  );
};

export default TiltedCard;
