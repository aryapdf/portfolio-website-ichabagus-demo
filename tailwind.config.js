/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#00A9FF",
        secondary: "#89CFF3",
        third: "#A0E9FF",
        fourth: "#CDF5FD",
        dark: "#111827",
      },
      screens: {
        "2xl": "1320px",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
