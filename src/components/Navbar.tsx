import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Sun, Moon, Globe } from 'lucide-react';
import { useThemeStyles } from '../hooks/useThemeStyles';
import { useTheme } from '../context/ThemeContext';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const styles = useThemeStyles();
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const menuItems = [
    { path: '/', label: t('nav.home') },
    { path: '/team', label: t('nav.team') },
    { path: '/projects', label: t('nav.projects') },
    { path: '/technologies', label: t('nav.technologies') },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleLanguageChange = (newLang: string) => {
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className={`${styles.background.primary} shadow-lg fixed w-full z-50`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold">
            DuckHats
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
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
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${styles.background.tertiary} ${styles.text.primary} hover:bg-opacity-80 transition-colors duration-300`}
              aria-label={theme === 'light' ? t('theme.toggleDark') : t('theme.toggleLight')}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Language Selector */}
            <div className="relative group">
              <button
                className={`p-2 rounded-full ${styles.background.tertiary} ${styles.text.primary} hover:bg-opacity-80 transition-colors duration-300 flex items-center gap-2`}
                aria-label={t('language.select')}
              >
                <Globe size={20} />
                <span className="text-sm">{i18n.language.toUpperCase()}</span>
              </button>
              <div className="absolute right-0 mt-2 w-24 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <button
                  onClick={() => handleLanguageChange('ca')}
                  className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 ${
                    i18n.language === 'ca' ? 'font-semibold text-blue-500' : ''
                  }`}
                >
                  Català
                </button>
                <button
                  onClick={() => handleLanguageChange('es')}
                  className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 ${
                    i18n.language === 'es' ? 'font-semibold text-blue-500' : ''
                  }`}
                >
                  Español
                </button>
                <button
                  onClick={() => handleLanguageChange('en')}
                  className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 ${
                    i18n.language === 'en' ? 'font-semibold text-blue-500' : ''
                  }`}
                >
                  English
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${styles.background.tertiary} ${styles.text.primary} hover:bg-opacity-80 transition-colors duration-300`}
              aria-label={theme === 'light' ? t('theme.toggleDark') : t('theme.toggleLight')}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-full ${styles.background.tertiary} ${styles.text.primary} hover:bg-opacity-80 transition-colors duration-300`}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
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
              {/* Language Selector in Mobile Menu */}
              <div className="px-3 py-2">
                <div className="flex gap-2">
                  <button
                    onClick={() => handleLanguageChange('ca')}
                    className={`px-3 py-1 rounded-md text-sm ${
                      i18n.language === 'ca'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-700 text-gray-300'
                    }`}
                  >
                    CA
                  </button>
                  <button
                    onClick={() => handleLanguageChange('es')}
                    className={`px-3 py-1 rounded-md text-sm ${
                      i18n.language === 'es'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-700 text-gray-300'
                    }`}
                  >
                    ES
                  </button>
                  <button
                    onClick={() => handleLanguageChange('en')}
                    className={`px-3 py-1 rounded-md text-sm ${
                      i18n.language === 'en'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-700 text-gray-300'
                    }`}
                  >
                    EN
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}; 