/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#5046E3',
        'secondary': '#E0E8FF',
        'sidebar-background': '#FFFFFF',
        'card-space': '#FAFBFD',
        'dark-gray': '#747474',
        'border': '#C3C4C6'
      }
    },
  },
  plugins: [],
}

