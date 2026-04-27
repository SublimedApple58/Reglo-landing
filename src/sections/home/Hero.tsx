'use client';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkle } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import MagneticButton from '../../components/ui/MagneticButton';
import TiltCard from '../../components/ui/TiltCard';
import { CAL_BOOKING_URL, trackBookingCTA } from '../../lib/booking';
import { SPRING } from '../../motion';

/**
 * Asymmetric Hero — left 60% editorial copy, right 40% glass mockup.
 * Background: dot grid + tinted blur orbs.
 */
export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-paper pt-24 pb-20 sm:pt-32 sm:pb-28 lg:pt-36 lg:pb-32">
      {/* Tinted background orbs (subtle, never neon) */}
      <div className="pointer-events-none absolute -top-24 -right-32 h-[520px] w-[520px] rounded-full bg-rose-500/15 blur-[120px]" aria-hidden />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-[420px] w-[420px] rounded-full bg-amber-400/12 blur-[120px]" aria-hidden />
      {/* Dot grid */}
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-50" aria-hidden />

      <div className="relative max-w-[1400px] mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

        {/* LEFT — copy (cols 1..7) */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={SPRING.default}
            className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-paper/80 backdrop-blur px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-700 mb-7"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-pulse-soft rounded-full bg-rose-500" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-rose-500" />
            </span>
            Demo gratuita disponibile
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...SPRING.default, delay: 0.05 }}
            className="h-display text-[44px] sm:text-[68px] lg:text-[88px] text-ink-950"
          >
            L'autoscuola
            <br />
            del{' '}
            <span className="relative inline-block">
              <span className="relative z-10 italic font-light tracking-tight">
                futuro
              </span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.7, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                style={{ originX: 0 }}
                className="absolute left-0 right-0 -bottom-1 h-[10px] bg-rose-500/40 -z-0 rounded-full"
              />
            </span>
            <span className="text-rose-500">.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...SPRING.default, delay: 0.12 }}
            className="mt-7 max-w-[560px] text-lg sm:text-xl text-ink-500 leading-relaxed"
          >
            Slot pieni, meno chiamate. Segreteria, istruttori e allievi sincronizzati in un'unica app — senza messaggi sparsi, senza errori di calendario.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...SPRING.default, delay: 0.18 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <MagneticButton
              href={CAL_BOOKING_URL}
              onClick={() => trackBookingCTA('home_hero')}
              className="group relative inline-flex items-center gap-2.5 rounded-full bg-ink-950 text-paper pl-6 pr-5 py-3.5 text-[15px] font-semibold shadow-diffusion-lg transition-colors hover:bg-rose-500"
            >
              Prenota una demo
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-paper/15 transition-transform group-hover:rotate-45">
                <ArrowUpRight size={14} weight="bold" />
              </span>
            </MagneticButton>

            <Link
              to="#calcolatore"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('calcolatore')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group inline-flex items-center gap-2 text-[15px] font-semibold text-ink-700 hover:text-ink-950"
            >
              <span className="border-b border-ink-300 group-hover:border-ink-950 transition-colors pb-0.5">
                Calcola quanto perdi
              </span>
              <Sparkle size={16} weight="fill" className="text-amber-400" />
            </Link>
          </motion.div>

          {/* Inline social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="mt-12 flex items-center gap-5"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="h-8 w-8 rounded-full border-2 border-paper bg-gradient-to-br from-ink-200 to-ink-400 ring-1 ring-ink-200"
                  style={{
                    backgroundImage: `linear-gradient(135deg, hsl(${(i * 57) % 360}, 28%, 78%), hsl(${(i * 57 + 30) % 360}, 32%, 64%))`,
                  }}
                />
              ))}
            </div>
            <p className="text-[13px] text-ink-500 leading-tight">
              <span className="font-semibold text-ink-950">+1.200 allievi</span> già gestiti<br />
              dalle autoscuole nostre clienti
            </p>
          </motion.div>
        </div>

        {/* RIGHT — visual stack (cols 8..12) */}
        <div className="lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ ...SPRING.soft, delay: 0.2 }}
            className="relative"
          >
            <TiltCard className="relative rounded-[28px] overflow-hidden shadow-diffusion-lg ring-1 ring-ink-200/60">
              <img
                src="/dashboard-screenshot.png"
                alt="Dashboard Reglo"
                className="block w-full"
              />
              {/* Glass spec sticker overlay top */}
              <div className="absolute top-4 left-4 glass rounded-2xl px-3 py-2 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse-soft" />
                <span className="text-[11px] font-semibold text-ink-700">Live</span>
              </div>
            </TiltCard>

            {/* Floating mascot — perpetual y motion */}
            <motion.img
              src="/mascot.png"
              alt=""
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -left-16 sm:-left-24 -bottom-6 w-32 sm:w-44 lg:w-52 drop-shadow-2xl pointer-events-none"
            />

            {/* Floating stat chip — bottom-right */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ ...SPRING.overshoot, delay: 0.6 }}
              className="absolute -right-2 sm:-right-6 bottom-8 glass rounded-2xl px-4 py-3 min-w-[150px]"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-500">Slot recuperati</p>
              <p className="text-2xl font-bold text-ink-950 tabular-nums leading-tight">+38<span className="text-rose-500">%</span></p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
