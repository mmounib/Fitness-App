/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'favorite': "#D97706",
      },
      boxShadow: {
        'customShadow': '3px 10px 13px -9px rgba(217, 119, 6, 0.704)',
      },
    },
  },
  plugins: [],
};