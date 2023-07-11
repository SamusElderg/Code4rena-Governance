/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        main: ["var(--font-nunito)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
