import localFont from 'next/font/local';

export const fontDameron = localFont({
  src: '../../public/fonts/dameron.ttf',
  variable: '--font-dameron',
});

export const fontJost = localFont({
  src: [
    { path: '../../public/fonts/Jost-Medium.ttf', weight: '500' },
    { path: '../../public/fonts/Jost-Regular.ttf', weight: '400' },
  ],
  variable: '--font-jost',
});

export const fontBirdman = localFont({
  src: '../../public/fonts/birdman.ttf',
  variable: '--font-birdman',
});
