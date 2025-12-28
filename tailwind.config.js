// /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        'light': '#f8f9fa',
        'dark': '#212529',
        'accent': '#17a2b8',
        'accent-secondary': '#ffc107',
      }
    },
  },
  plugins: [],
}
