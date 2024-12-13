/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        greenTitle :"#109D58",
      },
    },
    fontFamily: {
      sans: [ "Noto Sans Display", 'sans-serif'], // Add the font here
    },
  },
  plugins: [],
};
