import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { GithubIcon, CodeIcon } from 'lucide-react';
import { Terminal } from './Terminal';
import { useThemeStyles } from '../hooks/useThemeStyles';

export const Hero: React.FC = () => {
  const { t } = useTranslation();
  const styles = useThemeStyles();

  return (
    <section id="home" className={`py-20 md:py-32 bg-gradient-to-br ${styles.background.primary} w-full overflow-hidden relative`}>
      <div className="absolute inset-0 bg-grid-pattern opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-16">
          <div className="md:w-1/2 text-center md:text-left pl-4 md:pl-0">
            <motion.h1
              className="text-4xl md:text-7xl font-bold mb-6 text-white glitch-text"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <span className="block">{t('hero.welcome')}</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400">
                DuckHats
              </span>
            </motion.h1>
            <motion.p
              className={`text-xl ${styles.text.secondary} mb-8 max-w-2xl leading-relaxed`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            >
              {t('hero.description')}
            </motion.p>
          </div>
          <div className="md:w-1/2">
            <Terminal />
          </div>
        </div>
        <div className="flex justify-center mt-12 gap-6">
          <motion.a
            href="https://github.com/DuckHats"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-grey-400 rounded-lg hover:bg-white/20 transition-all duration-300 border border-grey-300/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <GithubIcon size={20} />
            {t('hero.github')}
          </motion.a>
          <motion.a
            href="#projects"
            className="flex items-center gap-2 px-6 py-3 bg-green-500/20 backdrop-blur-sm text-green-400 rounded-lg hover:bg-green-500/30 transition-all duration-300 border border-green-500/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <CodeIcon size={20} />
            {t('hero.projects')}
          </motion.a>
        </div>
      </div>
    </section>
  );
};