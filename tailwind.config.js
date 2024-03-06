/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        porcelain: "#edf1f2",
        bluewood: "#2b3d4f",
        silverSand: "#bdc3c7",
      },
    },
  },
  plugins: [],
};
