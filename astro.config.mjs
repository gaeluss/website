// @ts-check
import { defineConfig } from 'astro/config';
import partytown from '@astrojs/partytown';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), partytown()],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'no', 'nl'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});