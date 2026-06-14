/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Single source of truth for the accent. Swap these three values to
        // re-theme the whole site (e.g. emerald: 059669 / 10b981 / 047857).
        accent: {
          DEFAULT: '#4f46e5', // indigo-600
          light: '#6366f1',   // indigo-500 (used on dark backgrounds)
          dark: '#4338ca'     // indigo-700 (hover)
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif']
      }
    },
  },
}
