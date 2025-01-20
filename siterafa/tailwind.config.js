/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'martini-blue': '#0B2543',
        'martini-gold': '#C4B36E',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}