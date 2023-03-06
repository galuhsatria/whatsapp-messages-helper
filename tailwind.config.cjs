/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "green-light": "#25D366",
        "green-dark": "#075E54",
        dark: "#1E293B",
        black: "#0F172A",
      },
      fontFamily: {
        poppins: "poppins",
      },
      borderWidth: {
        2: "1px",
      },
    },
  },
  plugins: [],
};
