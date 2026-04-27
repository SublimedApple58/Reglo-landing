'use client';
import { useRef, type ReactNode, type MouseEvent } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { SPRING } from '../../motion';

type Props = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  intensity?: number; // 0..1, default 0.35
  as?: 'a' | 'button';
  target?: string;
  rel?: string;
};

/**
 * Magnetic button: physically pulls toward cursor using motion values
 * (no React re-renders). Isolated client component for performance.
 */
export default function MagneticButton({
  children,
  href,
  onClick,
  className = '',
  intensity = 0.35,
  as,
  target,
  rel,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, SPRING.snappy);
  const y = useSpring(my, SPRING.snappy);
  // inner content moves at half the strength so the wrapper feels like a magnetic field
  const innerX = useTransform(x, v => v * 0.5);
  const innerY = useTransform(y, v => v * 0.5);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    mx.set((e.clientX - cx) * intensity);
    my.set((e.clientY - cy) * intensity);
  };

  const handleLeave = () => {
    mx.set(0);
    my.set(0);
  };

  const Tag = (as ?? (href ? 'a' : 'button')) as 'a' | 'button';

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x, y }}
      className="inline-block"
    >
      <motion.div style={{ x: innerX, y: innerY }} className="inline-block">
        {Tag === 'a' ? (
          <a href={href} target={target} rel={rel} onClick={onClick} className={className}>
            {children}
          </a>
        ) : (
          <button onClick={onClick} className={className}>
            {children}
          </button>
        )}
      </motion.div>
    </motion.div>
  );
}
