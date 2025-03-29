import english from './en.json';
import polish from './pl.json';

export const resources = {
  pl: { translation: polish },
  en: { translation: english },
} as const;

export type Translations = typeof english;
