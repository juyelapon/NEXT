/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#030303',
          card: '#141414',
          subtle: '#1C1C1C',
          border: '#262626',
        },
        primary: {
          DEFAULT: '#0A84FF',
          hover: '#0070E0',
          light: 'rgba(10, 132, 255, 0.15)',
        },
        accent: {
          purple: '#8961FF',
        },
        gray: {
          60: '#98989A',
          90: '#E6E6E6',
        }
      },
      fontFamily: {
        sans: ['Barlow', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        lexend: ['Lexend', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(90deg, #0A84FF 0%, #8961FF 100%)',
      }
    },
  },
  plugins: [],
}
