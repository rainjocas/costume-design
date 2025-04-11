/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        theme_red: "#A50104",
        theme_orange: "#F37940",
        theme_black: "#000000",
        theme_grey: "#535454"
      },
    },
  },
  plugins: [],
};
