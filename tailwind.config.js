/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      "primary-blue": "var(--primary-blue)",
      "primary-orange": "var(--primary-orange)",
      "secondary-orange": "var(--secondary-orange)",
      black: "var(--black)",
      white: "var(--white)",
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
