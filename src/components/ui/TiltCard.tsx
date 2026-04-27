'use client';
import { useRef, type ReactNode } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { SPRING } from '../../motion';

type Props = {
  children: ReactNode;
  className?: string;
  max?: number; // max tilt in degrees, default 8
};

/**
 * 3D tilt card tracking mouse coordinates.
 * Uses motion values to bypass React re-renders.
 */
export default function TiltCard({ children, className = '', max = 8 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0); // -1..1
  const my = useMotionValue(0);
  const sx = useSpring(mx, SPRING.snappy);
  const sy = useSpring(my, SPRING.snappy);
  const rotateX = useTransform(sy, [-1, 1], [max, -max]);
  const rotateY = useTransform(sx, [-1, 1], [-max, max]);

  return (
    <motion.div
      ref={ref}
      onMouseMove={(e) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        mx.set((e.clientX - rect.left) / rect.width * 2 - 1);
        my.set((e.clientY - rect.top) / rect.height * 2 - 1);
      }}
      onMouseLeave={() => { mx.set(0); my.set(0); }}
      style={{ rotateX, rotateY, transformPerspective: 1200, transformStyle: 'preserve-3d' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
