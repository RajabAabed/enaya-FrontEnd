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
        level1: {
          200: "#36bac01f",
          600: "#36BAC0",
        },
        level2: {
          200: "#E172201f",
          600: "#E17220",
        },
        level3: {
          200: "#C224241f",
          600: "#C22424",
        },
        level4: {
          200: "#40B8531f",
          600: "#40B853",
        },
        level5: {
          200: "#243DC21f",
          600: "#243DC2",
        },
        level6: {
          200: "#A224C21f",
          600: "#A224C2",
        },
      },
    },
  },
  plugins: [],
};
