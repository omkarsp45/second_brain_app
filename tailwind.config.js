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
        'primary': '#5e54e5',
        'primary-dark': '#2b20d1',
        'secondary': '#e0e8ff',
        'secondary-dark': '#bfd0ff',
        'sidebar-background': '#FFFFFF',
        'card-space': '#f6f8fc',
        'dark-gray': '#747474',
        'border': '#C3C4C6'
      }
    },
  },
  plugins: [],
}

