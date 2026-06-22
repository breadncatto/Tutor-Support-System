/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bk-blue': '#0056b3', // Xanh Bách Khoa
        'bk-light': '#F7F2F2', // <--- MÀU NỀN MỚI (Hồng nhạt giống mockup)
      }
    },
  },
  plugins: [],
}