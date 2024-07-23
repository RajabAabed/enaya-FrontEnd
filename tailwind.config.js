/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        IBM: ["IBM Plex Sans Arabic", "sans-serif"],
      },
      colors: {
        main: {
          200: "#91bb5629",
          600: "#91BB56",
        },
        primary: "#5DA441",
        secondary: "#1D2E0E",
        pColor: "#6A6E83",
        girlColor: {
          200: "#c278b229",
          600: "#C278B2",
        },
        bgDashboard: "#F5F5FA",
        textDashboard: "#4D4D4C",
      },
    },
  },
  plugins: [],
};
