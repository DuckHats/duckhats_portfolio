import React from 'react';
import { Team } from '../components/Team';
import { useThemeStyles } from '../hooks/useThemeStyles';

export const TeamPage: React.FC = () => {
  const styles = useThemeStyles();

  return (
    <div className={`min-h-screen pt-16 ${styles.background.primary}`}>
      <Team />
    </div>
  );
}; 