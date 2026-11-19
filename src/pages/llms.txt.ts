import type { APIRoute } from 'astro';
import { getI18N } from '@/i18n';
import { LANGUAGES, type Lang } from '@/i18n/ui';
import { useTranslatedPath } from '@/i18n/utils';
import { COMPANY, SOCIAL_PROFILES, stripTags, toMarkdown } from '@/data/company';

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL('https://gaeluss.com');
  const absolute = (path: string) => new URL(path, base).href;
  const translatePath = useTranslatedPath('en');
  const en = getI18N({ currentLocale: 'en' });
  const englishURL = absolute(translatePath('/', 'en'));

  const services = [
    [en.SERVICES.WEB_DEVELOPMENT, en.SERVICES.WEB_DEVELOPMENT_DESCRIPTION],
    [en.SERVICES.MOBILE_DEVELOPMENT, en.SERVICES.MOBILE_DEVELOPMENT_DESCRIPTION],
    [en.SERVICES.DESIGN, en.SERVICES.DESIGN_DESCRIPTION],
    [en.SERVICES.CONSULTING, en.SERVICES.CONSULTING_DESCRIPTION],
  ];

  const values = [en.ABOUT.LIST_1, en.ABOUT.LIST_2, en.ABOUT.LIST_3, en.ABOUT.LIST_4, en.ABOUT.LIST_5];

  const languages = (Object.keys(LANGUAGES) as Lang[]).map((code) => {
    const copy = getI18N({ currentLocale: code });
    return `- [${LANGUAGES[code].name}](${absolute(translatePath('/', code))}): ${copy.SEO_TITLE}`;
  });

  const body = [
    `# ${COMPANY.name}`,
    '',
    `> ${en.SEO_DESCRIPTION}`,
    '',
    toMarkdown(en.ABOUT.DESCRIPTION),
    '',
    `Tagline: ${en.VIDEO.SUBTITLE}.`,
    '',
    `## ${en.SERVICES.TITLE}`,
    '',
    ...services.map(([name, description]) => `- **${name}**: ${stripTags(description)}`),
    '',
    `## ${en.ABOUT.SUBTITLE}`,
    '',
    ...values.map((value) => `- ${toMarkdown(value)}`),
    '',
    '## Contact',
    '',
    `- Email: [${COMPANY.email}](mailto:${COMPANY.email})`,
    `- Website: [${englishURL}](${englishURL})`,
    ...SOCIAL_PROFILES.map(({ name, href }) => `- ${name}: [${href}](${href})`),
    '',
    '## Languages',
    '',
    'The website is available in Spanish, English, Dutch and Norwegian:',
    '',
    ...languages,
    '',
    '## Optional',
    '',
    `- [Sitemap](${absolute('/sitemap.xml')})`,
    '',
  ].join('\n');

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
