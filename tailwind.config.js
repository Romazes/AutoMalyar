/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#202020;",
      },
      fontFamily: {
        dameron: ["var(--font-dameron)"],
        jost: ["var(--font-jost)"],
      },
    },
  },
  plugins: [],
};
