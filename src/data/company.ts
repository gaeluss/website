import type { Lang } from '@/i18n/ui';

export const COMPANY = {
  name: 'Gaeluss',
  email: 'info@gaeluss.com',
  logo: '/brand/logo.png',
  ogImage: '/brand/og-image.png',
  ogImageAlt: 'Gaeluss — Web · Mobile · UI/UX · Consulting',
  xHandle: '@gaeluss_es',
};

export const SOCIAL_PROFILES = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/gaeluss' },
  { name: 'Instagram', href: 'https://www.instagram.com/gaeluss_es' },
  { name: 'X', href: 'https://x.com/gaeluss_es' },
] as const;

export type SocialName = (typeof SOCIAL_PROFILES)[number]['name'];

export const OG_LOCALES: Record<Lang, string> = {
  es: 'es_ES',
  en: 'en_US',
  nl: 'nl_NL',
  no: 'nb_NO',
};

export const stripTags = (html: string) => html.replace(/<[^>]+>/g, '');

export const toMarkdown = (html: string) =>
  stripTags(html.replace(/<strong>(.*?)<\/strong>/g, '**$1**'));
