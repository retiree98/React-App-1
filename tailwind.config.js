/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-color": "#1abc9c",
        "navy-blue": "#2C3E50",
        primary: "#0D6EFD",
      },
    },
  },
  plugins: [],
};
