/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4E2DBE",
      },
      fontFamily: {
        primary: ["Onest", "sans-serif"],
      },
      backgroundImage: {
        bg2: "url('assets/images/bg2.png')",
        mobileBg2: "url('assets/images/mobileBg2.png')",
      },
    },
  },
  plugins: [],
};
