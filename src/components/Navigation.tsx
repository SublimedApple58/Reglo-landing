import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const links = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'Cos\'è Reglo' },
    { path: '/workflow', label: 'Workflow' },
    // { path: '/pricing', label: 'Prezzi' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-transparent backdrop-blur-sm">
      <div className="max-w-[1536px] mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-3 text-2xl font-semibold text-[color:var(--color-ink)]">
            <img src="/Logo.png" alt="Reglo Logo" className="h-8" />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`text-sm font-semibold tracking-wide transition-colors ${
                  isActive(path)
                    ? 'text-[color:var(--color-ink)]'
                    : 'text-[color:var(--color-ink-muted)] hover:text-[color:var(--color-ink)]'
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              to="/demo"
              className="px-6 py-2 rounded-full text-[color:var(--color-ink)] font-semibold transition-all hover:-translate-y-0.5 hover:shadow-md bg-[color:var(--color-accent)]"
            >
              Demo
            </Link>
          </div>

          <button
            className="md:hidden rounded-full border border-white/70 bg-white/70 p-2 shadow-sm"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 glass-panel rounded-2xl p-4 space-y-2">
            {links.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setIsOpen(false)}
                className={`block py-2 font-medium transition-colors ${
                  isActive(path)
                    ? 'text-[color:var(--color-ink)]'
                    : 'text-[color:var(--color-ink-muted)] hover:text-[color:var(--color-ink)]'
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              to="/demo"
              onClick={() => setIsOpen(false)}
              className="block px-6 py-2 rounded-full text-[color:var(--color-ink)] font-semibold text-center bg-[color:var(--color-accent)]"
            >
              Demo
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
