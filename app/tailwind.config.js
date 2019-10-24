// eslint-disable-next-line no-undef
const defaultTheme = require('tailwindcss/defaultTheme');

/* eslint-disable-next-line */
module.exports = {
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        overlay: 'rgba(51,51,51,.75)',
        'overlay-light': 'rgba(255,255,255,.3)',
      },
      fontFamily: {
        sans: ['"Source Sans Pro"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    borderWidth: ['responsive', 'hover'],
  },
  plugins: [],
};
