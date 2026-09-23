/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fffbe6',
          100: '#fff1b8',
          200: '#ffe58f',
          300: '#ffd666',
          400: '#ffc069',
          500: '#f59e0b', // Primary Amber/Gold
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        navy: {
          800: '#1e293b',
          900: '#0f172a',
          950: '#090d16',
        },
        whatsapp: {
          500: '#25D366',
          600: '#128C7E',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
