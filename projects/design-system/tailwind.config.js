const preset = require("../../tailwind.preset");

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [preset], // ⬅️ inherit everything
  content: [
    "./src/**/*.{html,ts,mdx}",
    "./src/lib/**/*.{html,ts,mdx}",
    "./src/lib/components/**/*.{html,ts,mdx}",
  ],
  plugins: [],
};
