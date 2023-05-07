const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
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
            pre: {
              fontSize: '1rem',
              background: '#202026',
              padding: '1.125rem 0',
              lineHeight: 1.6,

              // https://github.com/atomiks/rehype-pretty-code/blob/36946fbc0318cbae176642becb5d6cbcb390324c/website/tailwind.config.js#L100
              '> code': {
                display: 'grid',

                '.word': {
                  background: 'rgba(200,200,255,0.15)',
                  padding: '0.25rem',
                  borderRadius: '0.25rem',
                },
                '> .line': {
                  padding: '0 1.25rem',
                  borderLeft: `2px solid transparent`,
                },
                '> .line.line--highlighted': {
                  background: 'rgba(200, 200, 255, 0.1)',
                  borderLeftColor: theme('colors.blue.400'),
                },
              },
            },
            ':not(pre) > code': {
              background: 'rgba(200,200,255,0.1)',
              padding: '0.25rem',
              borderRadius: '0.25rem',
            },
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
