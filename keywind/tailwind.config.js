const colors = require('tailwindcss/colors');
const { colors: defaultColors } = require('tailwindcss/defaultTheme');
/**
 * @type { import('@types/tailwindcss/tailwind-config').TailwindConfig }
 */
module.exports = {
  darkMode: 'media',
  plugins: [require('@tailwindcss/forms')],
  purge: ['./theme/**/*.ftl'],
  theme: {
    extend: {
      fontFamily: {
        sans : ['Rajdhani', 'cursive'],
      },
      colors: {
        primary: {
          DEFAULT: '#2BABBC',
          50: '#B1E6ED',
          100: '#A1E1E9',
          200: '#80D6E2',
          300: '#5ECCDA',
          400: '#3DC1D3',
          500: '#2BABBC',
          600: '#21818E',
          700: '#165861',
          800: '#0C2E33',
          900: '#010505',
        },
      },
    },
  },
};
