import React from 'react';

export const GridBackground: React.FC = () => {
  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        overflow: 'hidden',
        pointerEvents: 'none',
        backgroundColor: '#030508',
      }}
    >
      {/* Radial Gradient overlay for vignette effect and card contrast */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at 50% 50%, transparent 10%, #030508 85%)',
          zIndex: 1,
        }}
      />

      {/* Cyber Grid Lines */}
      <div 
        style={{
          position: 'absolute',
          top: '-50%',
          left: '-50%',
          width: '200%',
          height: '200%',
          backgroundSize: '40px 40px',
          backgroundImage: `
            linear-gradient(to right, rgba(0, 240, 255, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 240, 255, 0.04) 1px, transparent 1px)
          `,
          transform: 'perspective(500px) rotateX(60deg)',
          animation: 'gridMove 20s linear infinite',
        }}
      />

      {/* Futuristic Glowing Ambient Orbs */}
      <div 
        style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 240, 255, 0.08) 0%, transparent 70%)',
          filter: 'blur(40px)',
          animation: 'floatAnimation 10s ease-in-out infinite',
        }}
      />

      <div 
        style={{
          position: 'absolute',
          bottom: '15%',
          right: '10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.06) 0%, transparent 70%)',
          filter: 'blur(50px)',
          animation: 'floatAnimation 14s ease-in-out infinite alternate',
        }}
      />
    </div>
  );
};
