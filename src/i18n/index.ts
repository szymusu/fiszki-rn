import { getLocales } from 'expo-localization';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import { resources } from './locales';

const deviceLocale = getLocales()[0]?.languageCode ?? 'en';

i18next.use(initReactI18next).init({
  lng: deviceLocale,
  fallbackLng: 'en',
  resources,
  compatibilityJSON: 'v4',
});

export default i18next;
