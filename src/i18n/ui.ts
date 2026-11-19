import SpainFlag from '@/components/flags/spain.astro';
import EnglandFlag from '@/components/flags/england.astro';
import NorwayFlag from '@/components/flags/norway.astro';
import DutchFlag from '@/components/flags/netherlands.astro';

export const LANGUAGES = {
  en: {
    code: 'en',
    name: 'English',
    flag: EnglandFlag,
  },
  es: {
    code: 'es',
    name: 'Español',
    flag: SpainFlag,
  },
  no: {
    code: 'no',
    name: 'Norsk',
    flag: NorwayFlag,
  },
  nl: {
    code: 'nl',
    name: 'Nederlands',
    flag: DutchFlag,
  },
} satisfies Record<string, { code: string; name: string; flag: typeof SpainFlag }>;

export type Lang = keyof typeof LANGUAGES;

export const defaultLang: Lang = 'es';
export const showDefaultLang = false;

export const routes: Record<Lang, Record<string, string>> = {
    es: {},
    en: {},
    no: {},
    nl: {},
};
