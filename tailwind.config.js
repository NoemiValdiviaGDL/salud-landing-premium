/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          pink: "#FFA5C4", // bg-brand-pink / text-brand-pink
          ice: "#DCE2E9", // bg-brand-ice / border-brand-ice
          lavender: "#8A96C7", // text-brand-lavender
          bg: "#FFF4F8", // bg-brand-bg
          violet: "#A782C8", // bg-brand-violet / text-brand-violet
          deep: "#3A2E4C", // bg-brand-deep / text-brand-deep
        },
      },
    },
  },
  plugins: [],
};
