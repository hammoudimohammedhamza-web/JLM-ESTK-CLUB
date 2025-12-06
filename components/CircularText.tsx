import React, { useEffect } from 'react';
import { motion, useAnimation, useMotionValue, MotionValue, Transition } from 'motion/react';
interface CircularTextProps {
  text: string;
  spinDuration?: number;
  onHover?: 'slowDown' | 'speedUp' | 'pause' | 'goBonkers';
  className?: string;
  logo?: React.ReactNode;
  logoSize?: string;
  textRadius?: number;
}

const getRotationTransition = (duration: number, from: number, loop: boolean = true) => ({
  from,
  to: from + 360,
  ease: 'linear' as const,
  duration,
  type: 'tween' as const,
  repeat: loop ? Infinity : 0
});

const getTransition = (duration: number, from: number) => ({
  rotate: getRotationTransition(duration, from),
  scale: {
    type: 'spring' as const,
    damping: 20,
    stiffness: 300
  }
});

const CircularText: React.FC<CircularTextProps> = ({
  text,
  spinDuration = 20,
  onHover = 'speedUp',
  className = '',
  logo,
  logoSize = '100px',
  textRadius = 100
}) => {
  const letters = Array.from(text);
  const controls = useAnimation();
  const rotation: MotionValue<number> = useMotionValue(0);

  useEffect(() => {
    const start = rotation.get();
    controls.start({
      rotate: start + 360,
      scale: 1,
      transition: getTransition(spinDuration, start)
    });
  }, [spinDuration, text, onHover, controls]);

  const handleHoverStart = () => {
    const start = rotation.get();

    if (!onHover) return;

    let transitionConfig: ReturnType<typeof getTransition> | Transition;
    let scaleVal = 1;

    switch (onHover) {
      case 'slowDown':
        transitionConfig = getTransition(spinDuration * 2, start);
        break;
      case 'speedUp':
        transitionConfig = getTransition(spinDuration / 4, start);
        break;
      case 'pause':
        transitionConfig = {
          rotate: { type: 'spring', damping: 20, stiffness: 300 },
          scale: { type: 'spring', damping: 20, stiffness: 300 }
        };
        break;
      case 'goBonkers':
        transitionConfig = getTransition(spinDuration / 20, start);
        scaleVal = 0.8;
        break;
      default:
        transitionConfig = getTransition(spinDuration, start);
    }

    controls.start({
      rotate: start + 360,
      scale: scaleVal,
      transition: transitionConfig
    });
  };

  const handleHoverEnd = () => {
    const start = rotation.get();
    controls.start({
      rotate: start + 360,
      scale: 1,
      transition: getTransition(spinDuration, start)
    });
  };

  return (
    <div className={`relative w-[260px] h-[260px] ${className}`}>
      <motion.div
        className="absolute inset-0 rounded-full w-full h-full font-black text-white text-center cursor-pointer origin-center"
        style={{ rotate: rotation }}
        initial={{ rotate: 0 }}
        animate={controls}
        onMouseEnter={handleHoverStart}
        onMouseLeave={handleHoverEnd}
      >
        {letters.map((letter, i) => {
          const rotationDeg = (360 / letters.length) * i;
          const radian = (rotationDeg * Math.PI) / 180;
          const x = Math.sin(radian) * textRadius;
          const y = -Math.cos(radian) * textRadius;
          const transform = `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${rotationDeg}deg)`;

          return (
            <span
              key={i}
              className="absolute left-1/2 top-1/2 text-2xl transition-all duration-500 ease-[cubic-bezier(0,0,0,1)]"
              style={{
                transform,
                WebkitTransform: transform,
                position: 'absolute',
                transformOrigin: 'center',
                width: '20px',
                textAlign: 'center'
              }}
            >
              {letter}
            </span>
          );
        })}
      </motion.div>
      
      {/* Logo container */}
      {logo && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div style={{ width: logoSize, height: logoSize }}>
            {logo}
          </div>
        </div>
      )}
    </div>
  );
};

export default CircularText;
