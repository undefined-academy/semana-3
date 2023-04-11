/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/html/utils/withMT");
module.exports = withMT({
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        myblue: {
          50: "#eaf1fb",
          100: "#c0d5f2",
          200: "#96bae9",
          300: "#6c9ee0",
          400: "#4182d7",
          500: "#2869be",
          600: "#1f5193",
          700: "#163a69",
          800: "#0d233f",
          900: "#040c15",
        }
      },
      fontFamily: {
        space: ["Space Grotesk", "sans-serif"],
      }
    },
  },
  plugins: [],
});
