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
        softRed: "hsl(0, 94%, 66%)",
        mgPurple: "hsl(241, 64%, 64%)",
      },
      backgroundImage: {
        'dark-tumeric': "url('../public/images/background/lucas-marulier--tpMfp_GmTI-unsplash.jpg')",
        'dark-aliona': "url('../public/images/background/aliona-gumeniuk-AOQ83RPea60-unsplash.jpg')",
        'dark-pickled-stardust': "url('../public/images/background/pickled-stardust-4xc6i5BKPWs-unsplash.jpg')",
        'dark-chopping-board': "url('../public/images/background/patrick-fore-bg20VZvrfvY-unsplash.jpg')",
      }
    },
  },
  plugins: [],
}
