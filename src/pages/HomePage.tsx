import React from 'react';
import { Hero } from '../components/Hero';
import { useThemeStyles } from '../hooks/useThemeStyles';

export const HomePage: React.FC = () => {
  const styles = useThemeStyles();

  return (
    <div className={`min-h-screen pt-16 ${styles.background.primary}`}>
      <Hero />
    </div>
  );
}; 