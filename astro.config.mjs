// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import partytown from '@astrojs/partytown';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://gaeluss.com',
  integrations: [
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Space Grotesk',
      cssVariable: '--font-space-grotesk',
      fallbacks: ['ui-sans-serif', 'system-ui', 'sans-serif'],
      options: {
        variants: [
          {
            src: ['@fontsource-variable/space-grotesk/files/space-grotesk-latin-wght-normal.woff2'],
            weight: '300 700',
            style: 'normal',
            unicodeRange: ['U+0000-00FF', 'U+0131', 'U+0152-0153', 'U+02BB-02BC', 'U+02C6', 'U+02DA', 'U+02DC', 'U+0304', 'U+0308', 'U+0329', 'U+2000-206F', 'U+20AC', 'U+2122', 'U+2191', 'U+2193', 'U+2212', 'U+2215', 'U+FEFF', 'U+FFFD'],
          },
          {
            src: ['@fontsource-variable/space-grotesk/files/space-grotesk-latin-ext-wght-normal.woff2'],
            weight: '300 700',
            style: 'normal',
            unicodeRange: ['U+0100-02BA', 'U+02BD-02C5', 'U+02C7-02CC', 'U+02CE-02D7', 'U+02DD-02FF', 'U+1D00-1DBF', 'U+1E00-1E9F', 'U+1EF2-1EFF', 'U+2020', 'U+20A0-20AB', 'U+20AD-20C0', 'U+2113', 'U+2C60-2C7F', 'U+A720-A7FF'],
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: 'Gaeluss Title',
      cssVariable: '--font-gaeluss-title',
      fallbacks: ['sans-serif'],
      display: 'block',
      options: {
        variants: [
          {
            src: ['./src/assets/fonts/gaeluss-title.woff2'],
            weight: 400,
            style: 'normal',
          },
        ],
      },
    },
  ],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'no', 'nl'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
