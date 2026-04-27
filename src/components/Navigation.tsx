'use client';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { List, X, ArrowUpRight } from '@phosphor-icons/react';
import MagneticButton from './ui/MagneticButton';
import { CAL_BOOKING_URL, trackBookingCTA } from '../lib/booking';
import { SPRING } from '../motion';

const LINKS = [
  { href: '/',           label: 'Home'        },
  { href: '/calcolatore', label: 'Calcolatore' },
  { href: '/allievi',    label: 'Promo allievi' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      {/* Floating Dynamic Island-style nav */}
      <motion.nav
        layout
        transition={SPRING.snappy}
        className={`fixed inset-x-0 top-4 z-50 mx-auto flex items-center justify-center px-4`}
      >
        <motion.div
          layout
          transition={SPRING.snappy}
          className={`flex items-center gap-1 transition-all duration-300 ${
            scrolled
              ? 'glass rounded-full px-2 py-2 shadow-diffusion-sm'
              : 'bg-paper/0 rounded-full px-3 py-2'
          }`}
        >
          <Link to="/" className="flex items-center gap-2 pl-3 pr-4 py-1.5 group">
            <div className="relative h-7 w-7">
              <img src="/favicon.svg" alt="Reglo" className="h-7 w-7" />
            </div>
            <span className="text-[17px] font-bold tracking-tight text-ink-950">Reglo</span>
          </Link>

          <div className="hidden md:flex items-center gap-0.5 mx-2 border-x border-ink-200/50 px-2">
            {LINKS.map((l) => {
              const active = l.href === pathname;
              return (
                <Link
                  key={l.href}
                  to={l.href}
                  className={`relative px-3.5 py-1.5 text-[13px] font-medium rounded-full transition-colors ${
                    active ? 'text-ink-950' : 'text-ink-500 hover:text-ink-950'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="navActive"
                      transition={SPRING.snappy}
                      className="absolute inset-0 rounded-full bg-ink-100"
                    />
                  )}
                  <span className="relative">{l.label}</span>
                </Link>
              );
            })}
          </div>

          <MagneticButton
            href={CAL_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackBookingCTA('navbar')}
            className="hidden sm:inline-flex group items-center gap-2 rounded-full bg-ink-950 text-paper pl-4 pr-3 py-2 text-[13px] font-semibold hover:bg-rose-500 transition-colors"
          >
            Prenota demo
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-paper/15 transition-transform group-hover:rotate-45">
              <ArrowUpRight size={11} weight="bold" />
            </span>
          </MagneticButton>

          <button
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Chiudi menu' : 'Apri menu'}
            className="md:hidden flex h-9 w-9 items-center justify-center rounded-full text-ink-700 hover:bg-ink-100 transition-colors"
          >
            {open ? <X size={18} weight="bold" /> : <List size={18} weight="bold" />}
          </button>
        </motion.div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-ink-950/30 backdrop-blur-sm md:hidden"
            />
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0,    scale: 1    }}
              exit={{    opacity: 0, y: -10, scale: 0.97 }}
              transition={SPRING.snappy}
              className="fixed inset-x-4 top-20 z-50 glass rounded-3xl p-4 md:hidden shadow-diffusion-lg"
            >
              <div className="space-y-1">
                {LINKS.map((l) => (
                  <Link
                    key={l.href}
                    to={l.href}
                    className={`block px-4 py-3 rounded-2xl text-[15px] font-medium transition-colors ${
                      l.href === pathname
                        ? 'bg-ink-100 text-ink-950'
                        : 'text-ink-700 hover:bg-ink-50'
                    }`}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
              <a
                href={CAL_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackBookingCTA('navbar_mobile')}
                className="mt-2 flex items-center justify-between rounded-2xl bg-ink-950 text-paper px-5 py-3.5 text-[14px] font-semibold"
              >
                Prenota demo
                <ArrowUpRight size={16} weight="bold" />
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
