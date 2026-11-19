import SpainFlag from '@/components/flags/spain.astro';
import EnglandFlag from '@/components/flags/england.astro';
import NorwayFlag from '@/components/flags/norway.astro';
import DutchFlag from '@/components/flags/netherlands.astro';

export const LANGUAGES = {
  es: {
    code: 'es',
    name: 'Español',
    flag: SpainFlag,
  },
  en: {
    code: 'en',
    name: 'English',
    flag: EnglandFlag,
  },
  nl: {
    code: 'nl',
    name: 'Nederlands',
    flag: DutchFlag,
  },
  no: {
    code: 'no',
    name: 'Norsk',
    flag: NorwayFlag,
  },
} satisfies Record<string, { code: string; name: string; flag: typeof SpainFlag }>;

export type Lang = keyof typeof LANGUAGES;

export const defaultLang: Lang = 'es';
