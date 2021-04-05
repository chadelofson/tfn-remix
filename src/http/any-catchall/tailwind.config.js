const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./app/**/*.tsx', './app/**/*.js', './app/**/*.mdx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        news: '500px',
        together: '800px',
        'together-block': '500px',
        'culture-section': '800px',
        'culture-block': '315px',
        'culture-pic': '265px',
        'culture-main-pic': '600px',
        'vision-statement': '800px',
        'slide-show': '500px',
        footer: '500px',
        'tfn-companies': '475px',
      },
      width: {
        'together-block': '325px',
        'culture-block': '250px',
        'culture-main-pic': '675px',
        'together-text': '700px',
      },
      lineHeight: {
        48: '12rem',
      },
      colors: {
        brand: {
          primary: '#006E94',
          secondary: '#2099b1',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
