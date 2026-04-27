'use client';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from '@phosphor-icons/react';
import MagneticButton from '../components/ui/MagneticButton';
import { SPRING } from '../motion';

export default function NotFoundPage() {
  return (
    <main className="relative isolate min-h-[100dvh] bg-paper flex items-center overflow-hidden">
      <div className="grain" aria-hidden />
      <div className="pointer-events-none absolute -top-32 -right-32 h-[520px] w-[520px] rounded-full bg-rose-500/15 blur-[120px]" aria-hidden />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-[420px] w-[420px] rounded-full bg-amber-400/12 blur-[120px]" aria-hidden />
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-50" aria-hidden />

      <div className="relative max-w-[1400px] mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center w-full">

        <div className="lg:col-span-7 order-2 lg:order-1">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={SPRING.default}
            className="text-[12px] font-semibold uppercase tracking-[0.22em] text-rose-500 mb-6"
          >
            Errore 404
          </motion.p>

          <h1 className="h-display text-[100px] sm:text-[180px] lg:text-[240px] text-ink-950 leading-[0.85]">
            <GlitchDigit n="4" />
            <GlitchDigit n="0" delay={0.08} />
            <GlitchDigit n="4" delay={0.16} />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...SPRING.default, delay: 0.25 }}
            className="mt-7 text-2xl sm:text-3xl font-bold text-ink-950 max-w-[500px]"
          >
            Hai preso{' '}
            <span className="italic font-light text-ink-500">la strada</span>{' '}
            sbagliata.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...SPRING.default, delay: 0.32 }}
            className="mt-8"
          >
            <MagneticButton
              href="/"
              className="group inline-flex items-center gap-3 rounded-full bg-ink-950 text-paper pl-5 pr-6 py-3.5 text-[14px] font-semibold hover:bg-rose-500 transition-colors"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-paper/15 group-hover:-translate-x-0.5 transition-transform">
                <ArrowLeft size={14} weight="bold" />
              </span>
              Torna alla home
            </MagneticButton>
            {/* fallback link */}
            <Link to="/" className="sr-only">Home</Link>
          </motion.div>
        </div>

        <div className="lg:col-span-5 order-1 lg:order-2">
          <motion.img
            src="/mascot-404.png"
            alt="Mascotte arrabbiata"
            initial={{ opacity: 0, scale: 0.9, rotate: -6 }}
            animate={{ opacity: 1, scale: 1,    rotate: 0  }}
            transition={SPRING.soft}
            className="w-full max-w-[380px] mx-auto"
          />
        </div>
      </div>
    </main>
  );
}

/**
 * Glitch digit: applies short RGB shift loop.
 */
function GlitchDigit({ n, delay = 0 }: { n: string; delay?: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...SPRING.snappy, delay }}
      className="relative inline-block"
    >
      <motion.span
        animate={{ x: [0, -1.5, 1.5, 0], opacity: [1, 0.86, 1] }}
        transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 4, ease: 'easeInOut' }}
        className="relative z-10 inline-block"
      >
        {n}
      </motion.span>
      <motion.span
        aria-hidden
        animate={{ x: [0, 2, -2, 0], opacity: [0, 0.4, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 4, ease: 'easeInOut' }}
        className="absolute inset-0 z-0 text-rose-500"
      >
        {n}
      </motion.span>
      <motion.span
        aria-hidden
        animate={{ x: [0, -2, 2, 0], opacity: [0, 0.4, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 4, ease: 'easeInOut', delay: 0.06 }}
        className="absolute inset-0 z-0 text-amber-400"
      >
        {n}
      </motion.span>
    </motion.span>
  );
}
