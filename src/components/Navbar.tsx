import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import { useThemeStyles } from '../hooks/useThemeStyles';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const styles = useThemeStyles();
  const location = useLocation();

  const menuItems = [
    { path: '/', label: t('nav.home') },
    { path: '/team', label: t('nav.team') },
    { path: '/projects', label: t('nav.projects') },
    { path: '/technologies', label: t('nav.technologies') },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`${styles.background.primary} shadow-lg fixed w-full z-50`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold">
            DuckHats
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`${styles.text.primary} hover:text-blue-500 transition-colors duration-300 ${
                  isActive(item.path) ? 'text-blue-500 font-semibold' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-3 py-2 rounded-md ${styles.text.primary} hover:bg-gray-700 ${
                    isActive(item.path) ? 'bg-gray-700 font-semibold' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}; 