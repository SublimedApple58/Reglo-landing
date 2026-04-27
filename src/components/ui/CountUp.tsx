'use client';
import { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

type Props = {
  value: number;
  format?: (n: number) => string;
  className?: string;
  duration?: number; // seconds, controls spring stiffness inversely
};

/**
 * Spring count-up. Animates the displayed number when `value` changes.
 * Uses motion values — no React re-renders per tick.
 */
export default function CountUp({
  value,
  format = (n) => Math.round(n).toLocaleString('it-IT'),
  className = '',
  duration = 1.2,
}: Props) {
  const mv = useMotionValue(0);
  const stiffness = Math.max(20, Math.round(120 / duration));
  const sv = useSpring(mv, { stiffness, damping: 22, mass: 1 });
  const display = useTransform(sv, format);

  useEffect(() => {
    mv.set(value);
  }, [value, mv]);

  return <motion.span className={className}>{display}</motion.span>;
}
