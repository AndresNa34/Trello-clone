/** @type {import('tailwindcss').Config} */

const { Container } = require('postcss');
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend:{
      colors: {
        success: colors.green,
        primary: colors.blue,
        danger: colors.red,
      },
      container:{
        screens:{
          sm:'640px',
          md:'768px',
          lg:'1040px',
          xl:'1040px',
          '2x1':'1536px',
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

