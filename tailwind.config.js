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
    },
  },
  plugins: [],
}

