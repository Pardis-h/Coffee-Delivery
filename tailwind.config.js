/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,tsx,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins","sans-serif"],
        noto:["Noto Serif" , "serif"]
      },
    },
  },
  plugins: [],
}
