/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#f97316', // modernized orange
          light: '#ffb37a',
          dark: '#c2410c'
        },
        primary: {
          DEFAULT: '#1B1F26'
        }
      },
      fontFamily: {
        barlow: ['Barlow', 'ui-sans-serif', 'system-ui', 'sans-serif']
      }
    },
  },
}
