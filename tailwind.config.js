/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        xsm: "450px",
      },
    },
    colors: {
      subtleblue: "#d8e3ec",
      primaryColor: "#014f7b",
      secondaryColor: "#14829F",
      yw: "#FFB800",
      white: "#fff",
      white80: "rgba(255,255,255,0.8)",
    },
    backgroundImage: {
      homeBg: "url('/homeBg.png')",
      consultancyBg: "url('/consultancyBg.png')",
      academyBg: "url('/academyBg.png')",
      team: "url('/team.png')",
    },
  },
  plugins: [],
};
