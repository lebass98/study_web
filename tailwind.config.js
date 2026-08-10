/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        react: {
          light: '#087ea4',
          dark: '#149eca',
          bg: '#23272f',
          card: '#1c1d22',
          border: '#343a46',
        }
      },
      fontFamily: {
        sans: [
          'Optimistic Display',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Noto Sans KR',
          'sans-serif',
        ],
        mono: ['Fira Code', 'Cascadia Code', 'Consolas', 'monospace'],
      }
    },
  },
  plugins: [],
}
