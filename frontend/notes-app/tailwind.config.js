/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      //colors used in the projects
      colors:{
        primary:"#ff6302",
        secondary:"#ef863e"
      },
    },
  },
  plugins: [],
}

