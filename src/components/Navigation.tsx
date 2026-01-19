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
    { path: '/pricing', label: 'Prezzi' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[color:var(--color-border)]">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-[color:var(--color-ink)]">
            <img src="/Logo.png" alt="Reglo Logo" style={{ height: '34px' }} />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`font-medium transition-colors ${
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
              className="px-6 py-2 rounded-full text-white font-semibold transition-all hover:shadow-lg bg-[color:var(--color-ink)]"
            >
              Demo
            </Link>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pt-4 space-y-2 border-t mt-4 border-[color:var(--color-border)]">
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
              className="block px-6 py-2 rounded-full text-white font-semibold text-center bg-[color:var(--color-ink)]"
            >
              Demo
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
