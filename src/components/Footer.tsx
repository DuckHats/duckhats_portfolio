import React from 'react';
import { useTranslation } from 'react-i18next';
import { GithubIcon, HeartIcon, X } from 'lucide-react';
import { useThemeStyles } from '../hooks/useThemeStyles';

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  const styles = useThemeStyles();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`bg-gradient-to-br ${styles.background.primary} py-16 w-full`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold">DuckHats</h3>
            <p className={`${styles.text.secondary} mt-2 max-w-md`}>
              {t('footer.tagline')}
            </p>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="flex space-x-4 justify-center md:justify-end">
              <a
                href="https://github.com/DuckHats"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full ${styles.background.tertiary} ${styles.text.primary} hover:${styles.hover.primary} transition-colors`}
                aria-label="GitHub"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href="https://twitter.com/hats4ducks"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full ${styles.background.tertiary} ${styles.text.primary} hover:${styles.hover.primary} transition-colors`}
                aria-label="Twitter"
              >
                <X size={20} />
              </a>
            </div>
            <nav className="flex flex-wrap justify-center md:justify-end gap-4">
              <a
                href="/"
                className={`${styles.text.secondary} hover:${styles.text.primary} transition-colors`}
              >
                {t('nav.home')}
              </a>
              <a
                href="/team"
                className={`${styles.text.secondary} hover:${styles.text.primary} transition-colors`}
              >
                {t('nav.team')}
              </a>
              <a
                href="/projects"
                className={`${styles.text.secondary} hover:${styles.text.primary} transition-colors`}
              >
                {t('nav.projects')}
              </a>
              <a
                href="/technologies"
                className={`${styles.text.secondary} hover:${styles.text.primary} transition-colors`}
              >
                {t('nav.technologies')}
              </a>
            </nav>
          </div>
        </div>
        <div className={`border-t ${styles.border.primary} pt-6 flex flex-col md:flex-row justify-between items-center`}>
          <p className={`${styles.text.secondary} text-sm mb-4 md:mb-0`}>
            &copy; {currentYear} DuckHats. {t('footer.rights')}
          </p>
          <p className={`${styles.text.secondary} text-sm flex items-center`}>
            {t('footer.madeWith')}{' '}
            <HeartIcon size={16} className="mx-1 text-red-500" />{' '}
            {t('footer.by')} DuckHats
          </p>
        </div>
      </div>
    </footer>
  );
};