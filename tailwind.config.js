/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Playfair Display Variable', 'serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            fontFamily: 'Playfair Display Variable, serif',
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
