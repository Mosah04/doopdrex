/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0d0713",
        foreground: "#efeaf5",
        primary: "#6317b5",
        secondary: "#4d207e",
        accent: "#8231d8",
        tertiary: "#1dbcc2",
      },
      fontFamily: {
        mont: ["var(--font-montserrat)"],
      },
    },
  },
  plugins: [],
};
