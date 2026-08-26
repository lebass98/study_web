/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontWeight: {
        extrabold: '600',
        bold: '600',
      },
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
          '"Pretendard Variable"',
          'Pretendard',
          '-apple-system',
          'BlinkMacSystemFont',
          'system-ui',
          'Roboto',
          '"Helvetica Neue"',
          '"Segoe UI"',
          '"Apple SD Gothic Neo"',
          '"Noto Sans KR"',
          '"Malgun Gothic"',
          'sans-serif',
        ],
        mono: ['Fira Code', 'Cascadia Code', 'Consolas', 'monospace'],
      }
    },
  },
  plugins: [],
}
