import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["Poppins", "var(--font-poppins)"],
        clash: ["Clash Display", "var(--font-clash-display)"],
      },
      colors: {
        sona: {
          blue: "#0E6BA4",
          lightBlue: "#E6F2FF",
          lightdBlue: "#c5e0ff",
          purple: "#9747FF ",
          midPurple: "#8581FF",
          lightPurple: "#CDCBFF",
          pink: "#FF728D",
          midPink: "#FF96AA",
          lightPink: "#FFD0D9",
          green: "#25E44F",
          midGreen: "#69FF93",
          lightGreen: "#D1FFD9",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
export default config;
