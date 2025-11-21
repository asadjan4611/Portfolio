/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#0b1020",
        surface: "#0b1020",
        primary: {
          DEFAULT: "#247ba0",
          600: "#1f6b8f",
          700: "#195a77"
        },
        muted: "#9aa4b2"
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.35)"
      }
    }
  },
  plugins: []
};


