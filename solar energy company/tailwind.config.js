/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*{html,js}"],
  theme: {
    extend: {
      "backgroundImage":'url("./src_img/mother-with-her-little-son-by-solar-panels2.jpg")',
      fontFamily:{
        montserrat:['Montserrat']
      },
      screens:{
        'widescreen':{
          'raw':'(min-aspect-ratio:3/2)',
        },
        'tallscreen':{
          'raw':'(min-aspect-ratio:13/20)'
        }
      }
    },
  },
  plugins: [],
}

