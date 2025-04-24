/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      center:true,
      padding:{
        DEFAULT:'1rem',
        sm:'2rem',
        md:'3rem',
        lg:'4rem',
        xl:'5rem',
      },
      bg:{
        primary:'#a2efff',
        secundary:'#63a2ff',
        terciary:'#f6716e',
      }
    },
    fontFamily:{
      'poppin':['Poppins', 'sans-serif'],
      'Lobster':['Lobster'],
    },
    extend: {
      
    },
  },
  plugins: [],
}