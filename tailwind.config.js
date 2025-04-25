/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          950: '#121212',
          900: '#1a1a1a',
          800: '#2d2d2d',
          700: '#3d3d3d',
          600: '#5a5a5a',
          500: '#7a7a7a',
          400: '#9a9a9a',
          300: '#b7b7b7',
          200: '#d6d6d6',
          100: '#f2f2f2',
        },
        purple: {
          950: '#3b0764',
          900: '#4c0983',
          800: '#5b00a5',
          700: '#6d03c4',
          600: '#7e22ce',
          500: '#9333ea',
          400: '#a855f7',
          300: '#c084fc',
          200: '#d8b4fe',
          100: '#f3e8ff',
        },
        cyan: {
          950: '#083344',
          900: '#044e68',
          800: '#0e7490',
          700: '#0891b2',
          600: '#06b6d4',
          500: '#22d3ee',
          400: '#67e8f9',
          300: '#a5f3fc',
          200: '#cffafe',
          100: '#ecfeff',
        },
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};