// @ts-check
import { defineConfig } from 'astro/config';

const base = '/portfolio';

// https://astro.build/config
export default defineConfig({
  site: 'https://fozzyishere.github.io',
  base,
  redirects: {
    '/contact': `${base}/contacts`
  },
  build: {
    assets: '_astro'
  },
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
});