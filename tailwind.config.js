/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xxl': '1440px', // Add the custom 'xxl' breakpoint
      },
    },
  },
  plugins: [],
}
