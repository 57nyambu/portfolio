/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0b284c",
        accent: "#e5ab5f",
        sky: "#38bdf8",
        violet: "#8b5cf6",
        teal: "#14b8a6",
        rose: "#fb7185",
        amber: "#f59e0b",
        emerald: "#10b981"
      },
    },
  },
  plugins: [],
}
