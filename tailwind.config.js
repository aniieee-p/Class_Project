/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./ui/**/*.ejs"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
