import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import EnJson from './locales/en/translation.json';
import FrJson from './locales/fr/translation.json';

const resources = {
  en: {
    translation: EnJson,
  },
  fr: {
    translation: FrJson,
  },
};

const language = localStorage.getItem('language');

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: language || 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;