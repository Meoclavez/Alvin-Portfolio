import React, { useEffect, useState } from 'react';
import LiquidEther from './LiquidEther';
import LightPillar from './LightPillar';

export const InteractiveBackground: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const initialTheme = typeof document !== 'undefined' ? document.documentElement.getAttribute('data-theme') : 'dark';
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

  const sharedStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    zIndex: -2,
    pointerEvents: 'none',
  };

  return (
    <>
      {theme === 'dark' ? (
        <LiquidEther
          colors={['#00f0ff', '#8b5cf6', '#00ff66']}
          mouseForce={22}
          cursorSize={90}
          isViscous={true}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.4}
          autoIntensity={2.0}
          style={sharedStyle}
        />
      ) : (
        <LightPillar
          topColor="#7dd3fc"
          bottomColor="#e0f2fe"
          intensity={1.0}
          rotationSpeed={0.25}
          glowAmount={0.0025}
          pillarWidth={3.2}
          pillarHeight={0.45}
          noiseIntensity={0.3}
          pillarRotation={25}
          interactive={true}
          mixBlendMode="normal"
          quality="high"
          style={sharedStyle}
        />
      )}
    </>
  );
};

export default InteractiveBackground;
