import { useTheme } from '../context/ThemeContext';
import { themeConfig } from '../styles/theme';

export const useThemeStyles = () => {
  const { theme } = useTheme();
  return themeConfig[theme];
}; 