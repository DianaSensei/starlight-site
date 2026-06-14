import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://dianasensei.github.io',
  base: '/devtool-site',
  integrations: [tailwind(), sitemap()],
});
