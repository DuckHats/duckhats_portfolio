import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './utils/i18n';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { TeamPage } from './pages/TeamPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { TechnologiesPage } from './pages/TechnologiesPage';
import { MatrixRain } from './components/MatrixRain';
import { Footer } from './components/Footer';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <I18nextProvider i18n={i18n}>
          <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
            <MatrixRain />
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/technologies" element={<TechnologiesPage />} />
            </Routes>
            <Footer />
          </div>
        </I18nextProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;