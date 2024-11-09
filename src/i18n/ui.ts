import SpainFlag from '../components/flags/spain.astro';
import EnglandFlag from '../components/flags/england.astro';
import NorwayFlag from '../components/flags/norway.astro';

export const LANGUAGES: Record<
  string,
  { code: string; name: string; flag: typeof SpainFlag }
> = {
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
};

export const defaultLang = 'es';
export const showDefaultLang = false;

export const ui = {
    es: {},
    en: {},
    no: {},
} as const;

export const routes = {
    es: {},
    en: {},
    no: {},
};  
