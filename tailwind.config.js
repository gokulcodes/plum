/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  important: "#__next",
  theme: {
    extend: {
      sans: ["Inter"],
      keyframes: {
        openUp: {
          "0%": { opacity: "0", transform: "translateX(-2%)" },
          "100%": { opacity: "1", transform: "translateX(0%)" },
        },
        closeDown: {
          "0%": { opacity: "1", transform: "translateY(0%)" },
          "100%": { opacity: "0", transform: "translateY(2%)" },
        },
      },
      animation: {
        openUp: "openUp 0.5s ease-in",
        closeDown: "closeDown 0.5s ease-out",
      },
    },
    height: {
      full: "100vh",
    },
  },
  plugins: [],
};
