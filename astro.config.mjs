import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // Optimize for GitHub Pages static deployment
  output: 'static',
  
  // Using custom domain from CNAME
  site: 'https://manishadhikari.name.np/',
  
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
