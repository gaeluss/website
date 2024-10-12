import SpainFlag from '../components/flags/spain.astro';
import EnglandFlag from '../components/flags/england.astro';
import NorwayFlag from '../components/flags/norway.astro';  // Nueva bandera

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
  no: {  // Nuevo idioma
    code: 'no',
    name: 'Norsk',
    flag: NorwayFlag,
  },
};

export const defaultLang = 'es';
export const showDefaultLang = false;

export const ui = {
    es: {
      'nav.inicio': 'Inicio',
      'nav.vota': 'Vota',
      'nav.info': 'Información',
      'nav.archivo': 'Archivo',
      'nav.legal': 'Aviso Legal',
      'nav.privacidad': 'Privacidad',
      'nav.cookies': 'Cookies',
    },
    en: {
      'nav.inicio': 'Home',
      'nav.vota': 'Vote',
      'nav.info': 'Information',
      'nav.archivo': 'Archive',
      'nav.legal': 'Legal Notice',
      'nav.privacidad': 'Privacy',
      'nav.cookies': 'Cookies',
    },
    ca: {
      'nav.inicio': 'Inici',
      'nav.vota': 'Vota',
      'nav.info': 'Informació',
      'nav.archivo': 'Arxiu',
      'nav.legal': 'Avís Legal',
      'nav.privacidad': 'Privacitat',
      'nav.cookies': 'Cookies',
    },
    no: {  // Nueva traducción para noruego
      'nav.inicio': 'Hjem',
      'nav.vota': 'Stemme',
      'nav.info': 'Informasjon',
      'nav.archivo': 'Arkiv',
      'nav.legal': 'Juridisk merknad',
      'nav.privacidad': 'Personvern',
      'nav.cookies': 'Informasjonskapsler',
    },
} as const;
  

export const routes = {
    es: {
      vota: 'vota',
      info: 'info',
      archivo: 'archivo',
      'aviso-legal': 'aviso-legal',
      privacidad: 'privacidad',
      cookies: 'cookies',
    },
    en: {
      vota: 'vote',
      info: 'information',
      archivo: 'archive',
      'aviso-legal': 'legal-notice',
      privacidad: 'privacy',
      cookies: 'cookies',
    },
    ca: {
      vota: 'vota',
      info: 'informacio',
      archivo: 'arxiu',
      'aviso-legal': 'avis-legal',
      privacidad: 'privacitat',
      cookies: 'cookies',
    },
    no: {  // Nuevas rutas para noruego
      vota: 'stemme',
      info: 'informasjon',
      archivo: 'arkiv',
      'aviso-legal': 'juridisk-merknad',
      privacidad: 'personvern',
      cookies: 'informasjonskapsler',
    },
};  
