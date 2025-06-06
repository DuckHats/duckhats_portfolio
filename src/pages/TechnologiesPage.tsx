import React from 'react';
import { Technologies } from '../components/Technologies';
import { useThemeStyles } from '../hooks/useThemeStyles';

export const TechnologiesPage: React.FC = () => {
  const styles = useThemeStyles();

  return (
    <div className={`min-h-screen pt-16 ${styles.background.primary}`}>
      <Technologies />
    </div>
  );
}; 