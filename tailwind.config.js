/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
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
      },
      screens: {
        "2xl": "1320px",
      },
      fontFamily: {
        montserrat: ["Montserrat", 'sans-serif'],
      },
    },
  },
  plugins: [],
};
