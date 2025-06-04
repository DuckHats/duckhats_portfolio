import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { GithubIcon, ExternalLinkIcon, StarIcon } from 'lucide-react';
import { projects } from '../data/projectData';
import { useThemeStyles } from '../hooks/useThemeStyles';

export const Projects: React.FC = () => {
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
    <section id="projects" className={`py-20 ${styles.background.tertiary} w-full`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('projects.title')}
          </h2>
          <p className={`text-lg ${styles.text.secondary} max-w-2xl mx-auto`}>
            {t('projects.description')}
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.map(project => (
            <motion.div
              key={project.id}
              variants={item}
              className={`group ${styles.background.secondary}/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border ${styles.border.primary}/50`}
            >
              <div className="h-48 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500"
                  whileHover={{ scale: 1.1 }}
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
                    {project.name}
                  </h3>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <StarIcon size={18} />
                    <span className="text-sm font-medium">{project.stars}</span>
                  </div>
                </div>
                <p className={`${styles.text.secondary} mb-6 line-clamp-3`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`text-xs px-3 py-1.5 ${styles.background.tertiary} ${styles.text.secondary} rounded-full font-medium`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-6 py-3 ${styles.background.tertiary} ${styles.text.primary} rounded-full hover:shadow-lg transition-all duration-300`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <GithubIcon size={18} />
                    GitHub
                  </motion.a>
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full hover:shadow-lg transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLinkIcon size={18} />
                      Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="text-center mt-12">
          <motion.a
            href="https://github.com/DuckHats"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <GithubIcon size={20} />
            {t('projects.viewMore')}
          </motion.a>
        </div>
      </div>
    </section>
  );
};