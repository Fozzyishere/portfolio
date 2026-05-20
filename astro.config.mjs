// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://fozzyishere.github.io',
  base: '/portfolio',
  redirects: {
    '/contact': '/portfolio/contacts'
  },
  build: {
    assets: '_astro'
  }
});