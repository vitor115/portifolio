/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx','./index.html'],
  theme: {
    extend: {
      colors: {
        'bgcolor': '#22212C',
        'text': '#837E9F',
        'cards': '#302F3D',
        'techs': '#CB92B1'
      }
    },
    
  },
  plugins: [],
}
