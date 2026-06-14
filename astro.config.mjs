import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://dianasensei.github.io',
  base: '/devtool-site',
  integrations: [tailwind()],
});
