import React, { useState, useRef } from 'react';

interface TiltedCardProps {
  children: React.ReactNode;
  maxRotate?: number; // Maximum rotation in degrees
  className?: string;
  onClick?: () => void;
}

export const TiltedCard: React.FC<TiltedCardProps> = ({
  children,
  maxRotate = 15,
  className = '',
  onClick,
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [rotateX, setRotateX] = useState<number>(0);
  const [rotateY, setRotateY] = useState<number>(0);
  const [shadowStyle, setShadowStyle] = useState<string>('0 8px 30px rgba(0,0,0,0.3)');

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Mouse coordinates relative to card center
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    // Convert mouse position to target rotation
    // Note: Moving mouse up (negative mouseY) rotates around X-axis positively (rotates card face up)
    // Moving mouse right (positive mouseX) rotates around Y-axis positively (rotates card right)
    const targetRotateY = (mouseX / (width / 2)) * maxRotate;
    const targetRotateX = -(mouseY / (height / 2)) * maxRotate;

    setRotateX(targetRotateX);
    setRotateY(targetRotateY);

    // Dynamic glowing shadow that matches the tilting direction!
    const shadowX = -targetRotateY * 1.5;
    const shadowY = targetRotateX * 1.5;
    setShadowStyle(`${shadowX}px ${shadowY}px 35px rgba(0, 240, 255, 0.15), 0 8px 30px rgba(0,0,0,0.3)`);
  };

  const handleMouseLeave = () => {
    // Reset tilt on leave
    setRotateX(0);
    setRotateY(0);
    setShadowStyle('0 8px 30px rgba(0,0,0,0.3)');
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={className}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
        transition: 'transform 0.15s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.15s ease',
        boxShadow: shadowStyle,
        cursor: onClick ? 'pointer' : 'default',
        transformStyle: 'preserve-3d',
      }}
    >
      {/* 3D Child Wrapper for extra pop */}
      <div style={{ transform: 'translateZ(10px)', height: '100%' }}>
        {children}
      </div>
    </div>
  );
};

export default TiltedCard;
