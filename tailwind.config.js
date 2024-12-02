/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors:{
        textColor :"#5c5c77",
        predefineYellow:"#ffbc3b",
        defineBlue:"#1a1a37"
      },
      boxShadow: {
        'boom': '0 1px 1px gray', // Customize as needed
      },
      fontFamily:{
        font1:['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

