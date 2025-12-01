'use client';

import { useEffect, useRef } from 'react';

type ShinyTextProps = {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  color?: string;
};

export function ShinyText({
  children,
  className = '',
  duration = 2,
  color = 'rgba(255, 255, 255, 0.8)',
}: ShinyTextProps) {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const textElement = textRef.current;
    if (!textElement) return;

    const text = textElement.textContent || '';
    const letters = text.split('');
    
    // Wrap each letter in a span
    const wrappedText = letters.map((letter, i) => (
      `<span key=${i} class="shiny-letter" style="--delay: ${i * 0.05}s">${letter}</span>`
    )).join('');
    
    textElement.innerHTML = wrappedText;
  }, [children]);

  return (
    <span 
      ref={textRef} 
      className={`shiny-text inline-block ${className}`}
      style={{
        '--duration': `${duration}s`,
        '--shiny-color': color,
      } as React.CSSProperties}
    >
      {children}
      <style jsx global>{`
        .shiny-text {
          position: relative;
          display: inline-block;
          overflow: hidden;
        }
        
        .shiny-text .shiny-letter {
          position: relative;
          display: inline-block;
          transition: all 0.3s ease;
        }
        
        .shiny-text .shiny-letter::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            var(--shiny-color, rgba(255, 255, 255, 0.8)),
            transparent
          );
          animation: shine var(--duration, 2s) infinite;
          animation-delay: var(--delay, 0s);
          opacity: 0.7;
          transform: skewX(-20deg);
        }
        
        @keyframes shine {
          0% {
            left: -100%;
          }
          20%, 100% {
            left: 100%;
          }
        }
      `}</style>
    </span>
  );
}
