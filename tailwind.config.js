/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["Georgia", "ui-serif"],
      display: ["ui-sans-serif", "system-ui"],
      body: ["ui-sans-serif", "system-ui"],
    },
  },
  plugins: [],
}
