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
        snow: "#FAFAFA",
      },
      boxShadow: {
        feature: "0px 15px 30px -11px rgba(131, 166, 210, 0.50)",
      },
    },
  },
  plugins: [],
};
