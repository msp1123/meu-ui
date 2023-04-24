/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#faf5ff",
          100: "#f2e5ff",
          200: "#ead6ff",
          300: "#d8b4fe",
          400: "#bf83fc",
          500: "#a855f7",
          600: "#9234ea",
          700: "#7e22ce",
          800: "#6a21a6",
          900: "#591c87",
        },
      },
    },
  },
  plugins: [],
};
