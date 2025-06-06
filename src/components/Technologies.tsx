import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { technologies } from '../data/technologyData';
import { useThemeStyles } from '../hooks/useThemeStyles';

export const Technologies: React.FC = () => {
  const { t } = useTranslation();
  const styles = useThemeStyles();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="technologies" className={`py-20 ${styles.background.secondary} w-full`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('technologies.title')}
          </h2>
          <p className={`text-lg ${styles.text.secondary} max-w-2xl mx-auto`}>
            {t('technologies.description')}
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {technologies.map(tech => (
            <motion.div
              key={tech.id}
              variants={item}
              whileHover={{ scale: 1.1 }}
              className={`flex flex-col items-center p-6 ${styles.background.secondary}/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border ${styles.border.primary}/50`}
            >
              <motion.div
                className="w-20 h-20 mb-4 flex items-center justify-center"
              >
                <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
              </motion.div>
              <h3 className="text-center font-medium text-lg bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
                {tech.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};