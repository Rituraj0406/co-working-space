/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontSize: {
        '6xl': '3.625rem'
      },
      colors: {
        mainColor: "#263238",
        secondaryColor: "#65624C"
      }
    },
  },
  plugins: [],
}

