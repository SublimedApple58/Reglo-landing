import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { CAL_BOOKING_URL, trackBookingCTA } from '../lib/booking';

const MENU_ANIMATION_MS = 260;

const links = [
  { path: '/', label: 'Home' },
  { path: '/calcolatore', label: 'Calcolatore' },
  { path: '/allievi', label: 'Promo allievi' },
];

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
          ? 'bg-white/95 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.06)]'
          : 'bg-white border-b border-transparent'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 py-3.5">
        <div className="relative">
          <div className="flex items-center justify-between gap-6">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img src="/logo-icon.svg" alt="" className="h-6 w-6" />
              <span className="text-[28px] font-bold text-black leading-none">Reglo</span>
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-8">
              {links.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={path === '/calcolatore' ? trackCalculatorCTA : undefined}
                  className={`text-[15px] transition-colors duration-200 ${
                    isActive(path)
                      ? 'font-bold text-[#111]'
                      : 'font-normal text-[#6b7280] hover:text-[#111]'
                  }`}
                >
                  {label}
                </Link>
              ))}

              <a
                href={CAL_BOOKING_URL}
                onClick={() => trackBookingCTA('navbar_desktop')}
                className="px-5 py-2.5 rounded-lg font-bold text-sm text-white bg-[#ec4899] hover:bg-[#db2777] transition-all duration-200"
              >
                Prenota una demo
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              className="md:hidden rounded-lg border border-gray-200 bg-gray-50 p-2 text-gray-500 hover:bg-gray-100 transition-colors"
              onClick={toggleMenu}
              aria-label={isOpen ? 'Chiudi menu' : 'Apri menu'}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile dropdown */}
          {isOpen && (
            <div
              className={`mobile-menu-dropdown md:hidden absolute left-0 right-0 top-[calc(100%+0.6rem)] z-[70] bg-white rounded-2xl border border-gray-100 shadow-[0_20px_60px_rgba(0,0,0,0.1)] p-3 space-y-1 ${
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
                      ? 'text-[#111] bg-gray-50 font-bold'
                      : 'text-[#6b7280] hover:text-[#111] hover:bg-gray-50'
                  }`}
                >
                  {label}
                </Link>
              ))}
              <a
                href={CAL_BOOKING_URL}
                onClick={() => { trackBookingCTA('navbar_mobile'); closeMenu(); }}
                className="block mt-2 px-5 py-3 rounded-xl text-white font-bold text-sm text-center bg-[#ec4899]"
              >
                Prenota una demo
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
