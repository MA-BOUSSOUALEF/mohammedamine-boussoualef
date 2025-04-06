/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#60A5FA', // blue-400
          dark: '#3B82F6', // blue-500
        },
        secondary: {
          light: '#A78BFA', // violet-400
          dark: '#8B5CF6', // violet-500
        },
        background: {
          light: '#F3F4F6', // gray-100
          dark: '#111827', // gray-900
        }
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'glitch': 'glitch 1s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '33%': { transform: 'translate(2px, 2px)' },
          '66%': { transform: 'translate(-2px, -2px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
};