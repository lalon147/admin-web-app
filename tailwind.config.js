/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
     "primary": "#c770f0" 
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}
