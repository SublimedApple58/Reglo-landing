'use client';
import { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { SPRING } from '../../motion';

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
};

/**
 * Wrapper that fades + lifts on viewport entry.
 * Use sparingly — overuse kills performance.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 24,
  className = '',
  once = true,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-80px' }}
      transition={{ ...SPRING.default, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
