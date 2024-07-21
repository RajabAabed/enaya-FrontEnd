/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        IBM: ["IBM Plex Sans Arabic", "sans-serif"],
      },
      colors: {
        main: "#91BB56",
        primary: "#5DA441",
        secondary: "#1D2E0E",
        pColor: "#6A6E83",
      },
    },
  },
  plugins: [],
};
