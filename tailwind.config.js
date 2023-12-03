/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
       
        'custom-gray': '#383838',
        'custom-red': '#ff3d00',
      },
      margin: {
        '115': '2px',
      },
      height:{
        '600':'530px',
        '350':'350px',
        '900':'600px',
        '450':'450px',
        '1200':'750px'
      },
      width:{
         '600':'600px'
      }
    },
   
  },
  plugins: [],
}

