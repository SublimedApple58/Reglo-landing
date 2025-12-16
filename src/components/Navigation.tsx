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
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold" style={{ color: '#6057A0' }}>
            <img src="logo.png" alt="Reglo Logo" style={{height: "40px"}}/>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`font-medium transition-colors ${
                  isActive(path)
                    ? 'text-[#6057A0]'
                    : 'text-black/70 hover:text-[#6057A0]'
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              to="/demo"
              className="px-6 py-2 rounded-lg text-white font-semibold transition-all hover:shadow-lg"
              style={{ backgroundColor: '#6057A0' }}
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
          <div className="md:hidden pt-4 space-y-2 border-t mt-4">
            {links.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setIsOpen(false)}
                className={`block py-2 font-medium transition-colors ${
                  isActive(path)
                    ? 'text-[#6057A0]'
                    : 'text-black/70 hover:text-[#6057A0]'
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              to="/demo"
              onClick={() => setIsOpen(false)}
              className="block px-6 py-2 rounded-lg text-white font-semibold text-center"
              style={{ backgroundColor: '#6057A0' }}
            >
              Demo
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
