/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "Arial", "sans-serif"],
      },
      colors: {
        "dark-gray": "#4D4F62",
      },
    },
  },
  plugins: [],
};
