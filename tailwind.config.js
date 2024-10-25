/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4E2DBE",
      },
      fontFamily: {
        primary: ["Inter", "sans-serif"],
        secondary: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        bg2: "url('assets/images/bg2.png')",
        mobileBg2: "url('assets/images/mobileBg2.png')",
        team1:
          "url('https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      },
    },
  },
  plugins: [],
};
