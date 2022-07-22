/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1020px",
      xl: "1440px"
    },
    extend: {
      colors: {
        softBlue: "hsl(204, 56%, 59%)",
        darkSlate: "hsl(213, 10%, 22%)",
      }
    },
  },
  plugins: [],
}