/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xxl': '1536px',
      },
      colors: {
        lightPurple: "#f6f5fa",
        black: "#1c1c1c"
      }
    },
  },
  plugins: [],
}
