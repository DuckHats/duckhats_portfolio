import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Team } from './components/Team';
import { Projects } from './components/Projects';
import { Technologies } from './components/Technologies';
import { Footer } from './components/Footer';
import { MatrixRain } from './components/MatrixRain';
import { I18nextProvider } from 'react-i18next';
import i18n from './utils/i18n';
import { ThemeProvider } from './context/ThemeContext';

export function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider>
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
          <MatrixRain />
          <Header />
          <main>
            <Hero />
            <Team />
            <Projects />
            <Technologies />
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </I18nextProvider>
  );
}