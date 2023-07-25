/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'kameron': ['Kameron', 'serif']
      },
      colors: {
        'dark': '#111111',
        'gray-ash': '#616161',
        'gray-white': '#C2C2C2',
        'smooth-yellow': '#F9E7BB',
        'smooth-pink': '#E97CBB',
        'smooth-grape': '#3D47D9'
      }
    },
  },
  plugins: [],
}

