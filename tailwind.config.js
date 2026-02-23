/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['"Inter"', 'sans-serif'],
      },
      colors: {
        'custom-gray': '#696969',
        'gray-line': 'var(--color-gray-line)',
        'dark': '#080808',
        'light': '#F0EBEB',
        'custom-green': '#326722'
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      }
    },
  },
  plugins: [],
}