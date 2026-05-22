/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        vianWhite: "#F7F3EE",
        vianBeige: "#E8DED1",
        vianGold: "#C8A97E",
        vianCharcoal: "#1A1A1A",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};