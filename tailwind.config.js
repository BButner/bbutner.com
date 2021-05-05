const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  mode: 'jit',
  purge: [
    './components/**/*.tsx', 
    './pages/**/*.tsx'
  ],
  theme: {
    extend: {
      colors: {
        'twitter': 'rgb(29, 161, 242)',
        'linkedin': '#0a66c2',
        orange: colors.orange
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
