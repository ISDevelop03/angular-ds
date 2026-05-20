const preset = require("./tailwind.preset");

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [preset], // ⬅️ inherit everything
  content: [
    "./src/**/*.{html,ts}",
    "./projects/**/*.{html,ts}",
    "./documentation/**/*.{html,ts}",
  ], // ⬅️ scan these files for class names
  plugins: [require("@tailwindcss/container-queries")],
};
