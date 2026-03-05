import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { CAL_BOOKING_URL, trackBookingCTA } from '../lib/booking';

const MENU_ANIMATION_MS = 260;

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimerRef = useRef<number | null>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const trackCalculatorCTA = () => {
    const fbq = (window as Window & { fbq?: (...args: unknown[]) => void }).fbq;
    if (typeof fbq === 'function') {
      fbq('trackCustom', 'CalculatorCTA_Click', { source: 'navbar' });
    }
  };

  const links = [
    { path: '/', label: 'Home' },
    { path: '/piattaforma', label: 'Piattaforma' },
    { path: '/calcolatore', label: 'Calcolatore' },
    { path: '/allievi', label: 'Promo allievi' },
  ];

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    handler();
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(
    () => () => {
      if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
    },
    []
  );

  const openMenu = () => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setIsClosing(false);
    setIsOpen(true);
  };

  const closeMenu = () => {
    if (!isOpen) return;
    setIsClosing(true);
    closeTimerRef.current = window.setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
      closeTimerRef.current = null;
    }, MENU_ANIMATION_MS);
  };

  const toggleMenu = () => {
    if (isOpen && !isClosing) {
      closeMenu();
      return;
    }
    openMenu();
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a1628]/95 backdrop-blur-xl shadow-[0_4px_32px_rgba(0,0,0,0.4)] border-b border-white/6'
          : 'bg-[#0a1628]/70 backdrop-blur-md border-b border-transparent'
      }`}
    >
      <div className="max-w-[1536px] mx-auto px-5 sm:px-6 py-4">
        <div className="relative">
          <div className="flex items-center justify-between gap-6">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5">
              <img
                src="/Logo.png"
                alt="Reglo"
                className="h-8 brightness-0 invert"
              />
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-7">
              {links.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={path === '/calcolatore' ? trackCalculatorCTA : undefined}
                  className={`relative text-sm font-medium tracking-wide transition-colors duration-200 group ${
                    isActive(path)
                      ? 'text-white'
                      : 'text-white/55 hover:text-white'
                  }`}
                >
                  {label}
                  {isActive(path) && (
                    <span className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-[#AFE2D4]/0 via-[#AFE2D4]/70 to-[#AFE2D4]/0 rounded-full" />
                  )}
                </Link>
              ))}

              <a
                href={CAL_BOOKING_URL}
                onClick={() => trackBookingCTA('navbar_desktop')}
                className="btn-shimmer relative px-5 py-2 rounded-full font-semibold text-sm text-[#0a1628] bg-gradient-to-r from-[#AFE2D4] to-[#7ec4b5] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(175,226,212,0.45)]"
              >
                Prenota demo
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              className="md:hidden rounded-full border border-white/12 bg-white/6 p-2 text-white/75 hover:bg-white/12 hover:text-white transition-colors duration-200"
              onClick={toggleMenu}
              aria-label={isOpen ? 'Chiudi menu' : 'Apri menu'}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile dropdown */}
          {isOpen && (
            <div
              className={`mobile-menu-dropdown md:hidden absolute left-0 right-0 top-[calc(100%+0.75rem)] z-[70] dark-glass rounded-2xl p-3 space-y-1 ${
                isClosing ? 'is-closing' : 'is-opening'
              }`}
            >
              {links.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={() => {
                    if (path === '/calcolatore') trackCalculatorCTA();
                    closeMenu();
                  }}
                  className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors duration-150 ${
                    isActive(path)
                      ? 'text-white bg-white/10'
                      : 'text-white/55 hover:text-white hover:bg-white/6'
                  }`}
                >
                  {label}
                </Link>
              ))}
              <a
                href={CAL_BOOKING_URL}
                onClick={() => {
                  trackBookingCTA('navbar_mobile');
                  closeMenu();
                }}
                className="block mt-2 px-5 py-3 rounded-full text-[#0a1628] font-bold text-sm text-center bg-gradient-to-r from-[#AFE2D4] to-[#7ec4b5]"
              >
                Prenota demo
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
