/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        theme_red: "#A50104",
        theme_orange: "#F37940",
        theme_black: "#000000",
        theme_grey: "#535454",
        theme_purple: "#8E7DBE",
        theme_violet: "#5E6DBE",
        theme_darkPurple: "#493D9E",
        theme_pink: "#F7CFD8",
        theme_blue: "#A6D6D6",
        theme_yellow: "#EEF1DA",
      },
    },
  },
  plugins: [],
};
