'use client';
import { type ReactNode } from 'react';
import { motion } from 'framer-motion';

type Props = {
  children: ReactNode;
  speed?: number; // seconds for one full cycle, default 40
  reverse?: boolean;
  pauseOnHover?: boolean;
  className?: string;
};

/**
 * Kinetic marquee with seamless loop. Children should be a single set —
 * we duplicate them internally and translate -50% for a perfect cycle.
 */
export default function Marquee({
  children,
  speed = 40,
  reverse = false,
  pauseOnHover = true,
  className = '',
}: Props) {
  return (
    <div className={`overflow-hidden mask-fade-x ${className}`}>
      <motion.div
        className="marquee-track group"
        animate={{ x: reverse ? ['-50%', '0%'] : ['0%', '-50%'] }}
        transition={{ duration: speed, ease: 'linear', repeat: Infinity }}
        whileHover={pauseOnHover ? { transitionEnd: {} } : undefined}
        style={pauseOnHover ? { animationPlayState: 'running' } : undefined}
      >
        <div className="flex shrink-0 items-center gap-12 pr-12">{children}</div>
        <div className="flex shrink-0 items-center gap-12 pr-12" aria-hidden>{children}</div>
      </motion.div>
    </div>
  );
}
