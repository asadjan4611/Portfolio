/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#0b1020",
        surface: "#0f1629",
        primary: {
          DEFAULT: "#7C3AED",
          600: "#6D28D9",
          700: "#5B21B6"
        },
        muted: "#a3b1c6"
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.35)"
      }
    }
  },
  plugins: []
};


