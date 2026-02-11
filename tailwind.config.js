/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyan: '#00FFFF',
        magenta: '#FF00FF',
        yellow: '#FFFF00',
        richBlack: '#050505', // A slightly deeper black for contrast
      },
    },
  },
  plugins: [],
};