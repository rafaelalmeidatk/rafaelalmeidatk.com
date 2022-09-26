const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      ...fontFamily,
      sans: ['Inter', ...fontFamily.sans],
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.200'),
            'h2, h3, h4': {
              color: theme('colors.gray.100'),
            },
            'code, blockquote': {
              color: theme('colors.gray.200'),
            },
          },
        },
      }),

      keyframes: {
        heading: {
          '0%': { backgroundPosition: '0 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0 50%' },
        },
      },
      animation: {
        heading: 'heading 10s linear infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
