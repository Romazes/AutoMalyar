/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: '#202020',
        'primary-light': '#2F2F2F',
        secondary: '#1CFFF1',
      },
      textColor: {
        primary: '#1CFFF1',
      },
      dropShadow: {
        'primary-text': ['0px 4px 0px #15B4AA', '0px 6px 0px #128A83'],
      },
      fontFamily: {
        dameron: ['var(--font-dameron)'],
        jost: ['var(--font-jost)'],
        birdman: ['var(--font-birdman)'],
      },
      fontSize: {
        '4-5xl': '2.5rem',
        '6-5xl': '4rem',
      },
      boxShadow: {
        'xl-btn': '8px 0px 16px 0px rgba(28, 255, 241, 0.25)',
        'price-tab': '20px 20px 40px 15px rgba(0, 0, 0, 0.25)',
      },
      borderRadius: {
        'btn-3xl': '2.875rem',
        '4xl': '3.125rem',
      },
      lineHeight: {
        'default-normal': 'normal',
      },
      textUnderlineOffset: {
        6: '6px',
      },
      colors: {
        'primary-cyan': '#1CFFF1',
      },
      margin: {
        '17-5': '4.375rem',
        18: '4.688rem',
        19: '4.75rem',
        30: '7.5rem',
        35: '8.75rem',
      },
      gap: {
        30: '1.875rem',
      },
      zIndex: {
        1: '1',
        2: '2',
        3: '3',
        4: '4',
      },
      keyframes: {
        fade: {
          '0%': { 'fill-opacity': '0' },
          '100%': { 'fill-opacity': '0.4' },
        },
      },
      animation: {
        fade: 'fade 0.8s ease-out forwards',
      },
    },
  },
  plugins: [],
};
