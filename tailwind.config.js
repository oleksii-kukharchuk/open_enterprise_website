/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      futuraRoundDemi: ["futuraRound", "sans-serif"],
      belyDisplayRegular: ["belyDisplayRegular", "sans-serif"],
    },
    extend: {
      width: {
        1440: "1440px",
      },
      colors: {
        hoverColor: "#71A894",
        textColor: "#66645E",
      },
    },
  },
  plugins: [],
};
