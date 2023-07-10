/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode:'class',
  theme: {
    extend: {
      fontFamily:{
        body:['Inter']
      },
      height:{
        '128':'42rem',
        '256':'30rem', 
      },
      width:{
        '256':'20rem',
      },
      colors:{
        primary: '#FF0000',
        footer: '#131313',
      },
      fontSize:{
        large: '3.2rem',
      } 
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
}
