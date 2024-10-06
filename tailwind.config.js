/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
    fontFamily: {
      customFont: ['"Bree Serif", "serif"'],
      paraFont: ['"Moderustic", "sans-serif"'],
      EduQLDBeginner:['"Edu QLD Beginner", cursive']
    },
  },
  plugins: [],
};
