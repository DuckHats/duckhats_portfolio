import React from 'react';
import { Projects } from '../components/Projects';
import { useThemeStyles } from '../hooks/useThemeStyles';

export const ProjectsPage: React.FC = () => {
  const styles = useThemeStyles();

  return (
    <div className={`min-h-screen pt-16 ${styles.background.primary}`}>
      <Projects />
    </div>
  );
}; 