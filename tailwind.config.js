/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "background-color": "#202020",
        "bo-color": "#383838",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
