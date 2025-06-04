import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { GithubIcon, Linkedin } from 'lucide-react';
import { teamMembers } from '../data/teamData';
import { useThemeStyles } from '../hooks/useThemeStyles';

export const Team: React.FC = () => {
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
    <section id="team" className={`py-20 ${styles.background.secondary} w-full`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('team.title')}
          </h2>
          <p className={`text-lg ${styles.text.secondary} max-w-2xl mx-auto`}>
            {t('team.description')}
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {teamMembers.map(member => (
            <motion.div
              key={member.id}
              variants={item}
              className={`group ${styles.background.secondary}/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border ${styles.border.primary}/50`}
            >
              <div className="p-8">
                <motion.div
                  className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-6 border-4 border-gray-200 dark:border-gray-700 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </motion.div>
                <h3 className={`text-2xl font-bold mb-2 text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400`}>
                  {member.name}
                </h3>
                <p className={`${styles.text.secondary} mb-6 text-center text-lg`}>
                  {member.role}
                </p>
                <div className="flex justify-center">
                  <motion.a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-6 py-3 ${styles.background.tertiary} ${styles.text.primary} rounded-full hover:shadow-lg transition-all duration-300`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <GithubIcon size={18} />
                    GitHub
                  </motion.a>
                  <motion.a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-6 py-3 ${styles.background.tertiary} ${styles.text.primary} rounded-full hover:shadow-lg transition-all duration-300`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Linkedin size={18} />
                    Linkedin
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};