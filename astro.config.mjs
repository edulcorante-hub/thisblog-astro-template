// @ts-check
import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: "https://edu-astroblog.netlify.app/",
  integrations: [
    preact(),
    tailwind(),
    // ✅ aggiunta integrazione Tailwind
  ],
});
