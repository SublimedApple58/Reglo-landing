'use client';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react';
import MagneticButton from './ui/MagneticButton';
import Marquee from './ui/Marquee';
import { CAL_BOOKING_URL, trackBookingCTA } from '../lib/booking';

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-ink-950 text-paper pt-24 sm:pt-32">
      {/* Tinted orb */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[400px] w-[800px] rounded-full bg-rose-500/15 blur-[120px]" aria-hidden />

      <div className="relative max-w-[1400px] mx-auto px-5 sm:px-8">

        {/* CTA block — asymmetric */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-20 sm:pb-28">
          <div className="lg:col-span-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="h-display text-5xl sm:text-6xl lg:text-[88px] text-paper leading-[0.95]"
            >
              Pronto a riempire
              <br />
              la tua{' '}
              <span className="italic font-light text-paper/50">autoscuola</span>?
            </motion.h2>
            <p className="mt-6 max-w-[440px] text-paper/60 text-lg">
              30 minuti, gratuiti, senza impegno. Vediamo insieme se Reglo fa al caso tuo.
            </p>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end lg:items-end">
            <MagneticButton
              href={CAL_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackBookingCTA('footer')}
              className="group inline-flex items-center gap-3 rounded-full bg-paper text-ink-950 pl-7 pr-5 py-4 text-[15px] font-semibold hover:bg-rose-500 hover:text-paper transition-colors"
            >
              Prenota una demo
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink-950/10 group-hover:bg-paper/15 transition-all group-hover:rotate-45">
                <ArrowUpRight size={14} weight="bold" />
              </span>
            </MagneticButton>
          </div>
        </div>

        {/* Kinetic tagline marquee */}
        <Marquee speed={50} pauseOnHover={false} className="border-y border-paper/10 py-8">
          <span className="text-5xl sm:text-7xl font-bold tracking-tight text-paper/15 mx-8">
            L'autoscuola del futuro
          </span>
          <span className="text-5xl sm:text-7xl font-bold tracking-tight text-paper/15 mx-8 italic">
            ·
          </span>
          <span className="text-5xl sm:text-7xl font-bold tracking-tight text-paper/15 mx-8">
            Slot pieni
          </span>
          <span className="text-5xl sm:text-7xl font-bold tracking-tight text-paper/15 mx-8 italic">
            ·
          </span>
          <span className="text-5xl sm:text-7xl font-bold tracking-tight text-paper/15 mx-8">
            Meno chiamate
          </span>
          <span className="text-5xl sm:text-7xl font-bold tracking-tight text-paper/15 mx-8 italic">
            ·
          </span>
        </Marquee>

        {/* Bottom row: brand + nav + socials + legal */}
        <div className="grid grid-cols-2 sm:grid-cols-12 gap-8 py-14">
          <div className="col-span-2 sm:col-span-5">
            <div className="flex items-center gap-3">
              <img src="/favicon.svg" alt="Reglo" className="h-9 w-9" />
              <span className="text-2xl font-bold tracking-tight">Reglo</span>
            </div>
            <p className="mt-4 max-w-[280px] text-sm text-paper/55 leading-relaxed">
              Piattaforma operativa per autoscuole moderne.
            </p>
          </div>

          <div className="col-span-1 sm:col-span-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-paper/40 mb-4">Navigazione</p>
            <ul className="space-y-2.5 text-[14px] text-paper/80">
              <li><Link to="/" className="hover:text-paper transition-colors">Home</Link></li>
              <li><Link to="/calcolatore" className="hover:text-paper transition-colors">Calcolatore</Link></li>
              <li><Link to="/allievi" className="hover:text-paper transition-colors">Promo allievi</Link></li>
            </ul>
          </div>

          <div className="col-span-1 sm:col-span-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-paper/40 mb-4">Legale</p>
            <ul className="space-y-2.5 text-[14px] text-paper/80">
              <li><Link to="/privacy-policy" className="hover:text-paper transition-colors">Privacy</Link></li>
              <li><Link to="/policy" className="hover:text-paper transition-colors">Policy</Link></li>
            </ul>
          </div>

          <div className="col-span-2 sm:col-span-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-paper/40 mb-4">Social</p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/brokecup/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-paper/15 text-paper/70 hover:bg-paper hover:text-ink-950 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinLogo size={16} weight="fill" />
              </a>
              <a
                href="https://www.instagram.com/reglohq"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-paper/15 text-paper/70 hover:bg-paper hover:text-ink-950 transition-colors"
                aria-label="Instagram"
              >
                <InstagramLogo size={16} weight="fill" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-paper/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-paper/40">© 2026 Reglo. Tutti i diritti riservati.</p>
          <p className="text-xs text-paper/40 font-mono">v2.0 · made in Italy</p>
        </div>
      </div>
    </footer>
  );
}
