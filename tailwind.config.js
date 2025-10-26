/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Playfair Display Variable', 'serif'],
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            fontFamily: 'Playfair Display Variable, serif',
            color: theme('colors.zinc.800'),
            a: {
              color: theme('colors.amber.700'),
              fontWeight: '500',
              textDecoration: 'none',
              '&:hover': {
                color: theme('colors.amber.800'),
                textDecoration: 'underline',
              },
            },
            strong: { color: theme('colors.zinc.900') },
            code: {
              color: theme('colors.amber.800'),
              backgroundColor: theme('colors.zinc.100'),
              padding: '0.2em 0.4em',
              borderRadius: '4px',
              fontWeight: '500',
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
            pre: {
              backgroundColor: theme('colors.zinc.100'),
              color: theme('colors.zinc.800'),
              padding: '1rem',
              borderRadius: '0.5rem',
              overflowX: 'auto',
            },
            blockquote: {
              borderLeftColor: theme('colors.amber.500'),
              color: theme('colors.zinc.700'),
              fontStyle: 'italic',
            },
          },
        },
        invert: {
          css: {
            color: theme('colors.zinc.100'),
            a: {
              color: theme('colors.amber.400'),
              '&:hover': { color: theme('colors.amber.300') },
            },
            strong: { color: theme('colors.zinc.100') },
            code: {
              color: theme('colors.amber.300'),
              backgroundColor: theme('colors.zinc.800'),
            },
            pre: {
              backgroundColor: theme('colors.zinc.800'),
              color: theme('colors.zinc.100'),
            },
            blockquote: {
              borderLeftColor: theme('colors.amber.400'),
              color: theme('colors.zinc.300'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
