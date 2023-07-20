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
        secondary: "#1CFFF1",
      },
      fontFamily: {
        dameron: ["var(--font-dameron)"],
        jost: ["var(--font-jost)"],
      },
      fontSize: {
        "6-5xl": "4rem",
      },
      boxShadow: {
        "xl-btn": "8px 0px 16px 0px rgba(28, 255, 241, 0.25)",
      },
      borderRadius: {
        "btn-3xl": "2.875rem",
      },
      lineHeight: {
        "default-normal" : "normal"
      }
    },
  },
  plugins: [],
};
