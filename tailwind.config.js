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
        '6-5xl': '4rem',
      },
      boxShadow: {
        'xl-btn': '8px 0px 16px 0px rgba(28, 255, 241, 0.25)',
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
      backgroundImage: {
        'color-gradient-classic-dye':
          'linear-gradient(140deg, rgba(153,186,191,1) 0%, rgba(190,214,216,1) 25%, rgba(99,138,145,1) 50%, rgba(108,145,154,1) 75%, rgba(95,136,142,1) 85%)',
        'color-gradient-chromium-dye':
          'linear-gradient(140deg, rgba(249,249,249,1) 0%, rgba(240,241,245,1) 10%, rgba(231,226,237,1) 25%, rgba(196,200,186,1) 40%, rgba(133,143,144,1) 55%, rgba(200,210,211,1) 75%, rgba(181,181,181,1) 85%)',
        'color-gradient-chameleon-dye':
          'linear-gradient(140deg, rgba(154,179,246,1) 0%, rgba(157,177,246,1) 13%, rgba(203,165,248,1) 26%, rgba(247,221,224,1) 39%, rgba(252,250,209,1) 52%, rgba(84,247,227,1) 65%, rgba(199,211,235,1) 78%, rgba(241,199,235,1) 91%, rgba(249,197,236,1) 100%)',
      },
    },
  },
  plugins: [],
};
