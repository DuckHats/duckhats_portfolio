import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MenuIcon, XIcon, SunIcon, MoonIcon, GlobeIcon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsLanguageMenuOpen(false);
  };

  const navItems = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.team'), href: '#team' },
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.technologies'), href: '#technologies' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md dark:shadow-gray-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="text-2xl font-bold">
            DuckHats
          </a>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map(item => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              {item.name}
            </a>
          ))}
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label={theme === 'light' ? t('theme.toggleDark') : t('theme.toggleLight')}
          >
            {theme === 'light' ? <MoonIcon size={20} /> : <SunIcon size={20} />}
          </button>
          {/* Language Selector */}
          <div className="relative z-50">
            <button
              onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
              className="flex items-center p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label={t('language.select')}
            >
              <GlobeIcon size={20} />
            </button>
            {isLanguageMenuOpen && (
              <div className="absolute top-full right-0 mt-2 w-36 bg-white dark:bg-gray-800 shadow-lg rounded-md py-1 z-50 origin-top-right">
                <button
                  onClick={() => changeLanguage('ca')}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Català
                </button>
                <button
                  onClick={() => changeLanguage('es')}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Español
                </button>
                <button
                  onClick={() => changeLanguage('en')}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  English
                </button>
              </div>
            )}
          </div>
        </nav>
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label={isMenuOpen ? t('nav.close') : t('nav.open')}
          >
            {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map(item => (
              <a
                key={item.href}
                href={item.href}
                className="py-2 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {theme === 'light' ? (
                  <>
                    <MoonIcon size={20} />
                    <span>{t('theme.dark')}</span>
                  </>
                ) : (
                  <>
                    <SunIcon size={20} />
                    <span>{t('theme.light')}</span>
                  </>
                )}
              </button>
              {/* Language Selector */}
              <div className="flex space-x-2">
                <button
                  onClick={() => changeLanguage('ca')}
                  className={`px-3 py-1 rounded-md ${
                    i18n.language === 'ca'
                      ? 'bg-gray-200 dark:bg-gray-700'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  CA
                </button>
                <button
                  onClick={() => changeLanguage('es')}
                  className={`px-3 py-1 rounded-md ${
                    i18n.language === 'es'
                      ? 'bg-gray-200 dark:bg-gray-700'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  ES
                </button>
                <button
                  onClick={() => changeLanguage('en')}
                  className={`px-3 py-1 rounded-md ${
                    i18n.language === 'en'
                      ? 'bg-gray-200 dark:bg-gray-700'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  EN
                </button>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};