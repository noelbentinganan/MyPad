/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',  //Add for screens
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        primaryColor: 'hsl(225, 59%, 11%)',
        secondaryColor: 'hsl(219, 23%, 27%)',
      },
    },
    fontFamily: {
      primaryFont: ['Encode Sans']
    },
  },
  plugins: [],
}