/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')


module.exports = {
  content: [
    "./assets/**/*.js",
    "./templates/**/*.html.twig",
  ],
  darkMode: ['class'],
  theme: {

    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '10rem',
      },
    },

    fontFamily: {
      'nunito': ['"Nunito"', 'sans-serif'],
      'maven': ['"Maven Pro"', 'sans-serif'],
    },

    extend: {
      colors: {
        'primary': "#007bff",
      },
    },
  },

  plugins: [
    require('@tailwindcss/forms'),
    require('postcss-import'),
    require('preline/plugin'),
    require('flowbite/plugin')
  ],
}
