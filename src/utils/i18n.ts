import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// Import translations
import translationCA from '../locales/ca.json';
import translationES from '../locales/es.json';
import translationEN from '../locales/en.json';
const resources = {
  ca: {
    translation: translationCA
  },
  es: {
    translation: translationES
  },
  en: {
    translation: translationEN
  }
};
i18n.use(initReactI18next).init({
  resources,
  lng: 'ca',
  fallbackLng: 'ca',
  interpolation: {
    escapeValue: false
  }
});
export default i18n;