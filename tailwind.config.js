module.exports = {
  mode: 'jit',
  purge: [
    './components/**/*.tsx',
    './pages/**/*.tsx'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'twitter': 'rgb(29, 161, 242)',
        'linkedin': '#0a66c2'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
