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
    const handler = () => setScrolled(window.scrollY > 16);
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
    if (isOpen && !isClosing) { closeMenu(); return; }
    openMenu();
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl border-b border-[#324D7A]/8 shadow-[0_2px_20px_rgba(50,77,122,0.07)]'
          : 'bg-white border-b border-transparent'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 py-4">
        <div className="relative">
          <div className="flex items-center justify-between gap-6">

            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img src="/Logo.png" alt="Reglo" className="h-8" />
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-8">
              {links.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={path === '/calcolatore' ? trackCalculatorCTA : undefined}
                  className={`relative text-sm font-medium transition-colors duration-200 ${
                    isActive(path)
                      ? 'text-[#324D7A]'
                      : 'text-[#0f1e36]/55 hover:text-[#0f1e36]'
                  }`}
                >
                  {label}
                  {isActive(path) && (
                    <span className="absolute -bottom-1 left-0 right-0 h-px rounded-full bg-gradient-to-r from-[#324D7A]/0 via-[#324D7A] to-[#324D7A]/0" />
                  )}
                </Link>
              ))}

              <a
                href={CAL_BOOKING_URL}
                onClick={() => trackBookingCTA('navbar_desktop')}
                className="btn-shimmer relative px-5 py-2 rounded-full font-semibold text-sm text-white bg-[#324D7A] hover:-translate-y-px hover:shadow-[0_8px_20px_rgba(50,77,122,0.35)] transition-all duration-200"
              >
                Prenota demo
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              className="md:hidden rounded-xl border border-[#324D7A]/12 bg-[#324D7A]/5 p-2 text-[#324D7A]/70 hover:bg-[#324D7A]/10 transition-colors"
              onClick={toggleMenu}
              aria-label={isOpen ? 'Chiudi menu' : 'Apri menu'}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile dropdown */}
          {isOpen && (
            <div
              className={`mobile-menu-dropdown md:hidden absolute left-0 right-0 top-[calc(100%+0.6rem)] z-[70] bg-white rounded-2xl border border-[#324D7A]/10 shadow-[0_20px_60px_rgba(50,77,122,0.14)] p-3 space-y-1 ${
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
                  className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive(path)
                      ? 'text-[#324D7A] bg-[#324D7A]/6'
                      : 'text-[#0f1e36]/55 hover:text-[#0f1e36] hover:bg-[#324D7A]/4'
                  }`}
                >
                  {label}
                </Link>
              ))}
              <a
                href={CAL_BOOKING_URL}
                onClick={() => { trackBookingCTA('navbar_mobile'); closeMenu(); }}
                className="block mt-2 px-5 py-3 rounded-xl text-white font-bold text-sm text-center bg-[#324D7A]"
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
