// @ts-check
import { defineConfig } from 'astro/config';
import partytown from '@astrojs/partytown';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://gaeluss.com',
  integrations: [
    tailwind(),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
  ],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'no', 'nl'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
