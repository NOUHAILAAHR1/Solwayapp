import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import fr from './translations/fr';
import en from './translations/en';

const resources = { fr, en };

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'fr',
    debug: true,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;