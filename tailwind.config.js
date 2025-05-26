const preset = require("./tailwind.preset");

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [preset], // ⬅️ inherit everything
  content: ["./src/**/*.{html,ts}", "./projects/**/*.{html,ts}"],
  plugins: [], // optional root-only plugins / overrides
};
