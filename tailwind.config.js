/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "background-color": "#3F3F3F",
        "bo-color": "#383838",
        "icon-bg-color": "#8B8B8B",
        "icon-bg-hover-color": "#686868",
      },
    },
  },
  plugins: [],
};
