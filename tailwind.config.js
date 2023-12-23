/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightgray: "rgba(255, 255, 255, 0.6)",
        bg: "#37517E",
        btnBG: "#209DD8",
      },
      gridTemplateColumns: {
        lg: "repeat(6, minmax(0px, 80px))",
        md: "repeat(3, minmax(0px, 80px))",
      },
      fontFamily: {
        poppins: "Poppins, Open Sans",
      },
      backgroundImage: {
        hr: "url('./img/cta-bg.jpg')",
      },
    },
  },
  plugins: [],
};
