import React, { useState, useEffect, useRef, useCallback } from 'react';

interface DecryptedTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  triggerOnHover?: boolean;
}

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*<>[]{}';

export const DecryptedText: React.FC<DecryptedTextProps> = ({
  text,
  speed = 40,
  delay = 300,
  className = '',
  triggerOnHover = true,
}) => {
  const [displayText, setDisplayText] = useState<string>(() =>
    text.split('').map(() => CHARS[Math.floor(Math.random() * CHARS.length)]).join('')
  );
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const decrypt = useCallback(() => {
    let iteration = 0;
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration) return text[index];
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join('')
      );

      if (iteration >= text.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
      }
      iteration += 1 / 3;
    }, speed) as unknown as number;
  }, [text, speed]);

  useEffect(() => {
    const startDelay = setTimeout(() => {
      decrypt();
    }, delay);

    return () => {
      clearTimeout(startDelay);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [decrypt, delay]);

  const handleMouseEnter = () => {
    if (triggerOnHover && !isHovered) {
      setIsHovered(true);
      decrypt();
    }
  };

  const handleMouseLeave = () => {
    if (triggerOnHover) {
      setIsHovered(false);
    }
  };

  return (
    <span 
      className={className} 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ display: 'inline-block', cursor: triggerOnHover ? 'pointer' : 'default' }}
    >
      {displayText}
    </span>
  );
};
export default DecryptedText;
