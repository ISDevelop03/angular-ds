/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,mdx}",
    "./src/lib/**/*.{html,ts,mdx}",
    "./src/lib/components/**/*.{html,ts,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
};
