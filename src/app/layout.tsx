import './globals.css';
import clsx from 'clsx';
import type { Metadata } from 'next';
import type { PropsWithChildren } from 'react';

import logo from '@/../public/images/logo.png';
import { Navbar } from '@/components/Navbar';
import { fontDameron, fontJost, fontBirdman } from '@/shared/fonts';

export const metadata: Metadata = {
  title: 'Auto Malyar Kyiv',
  description:
    'Auto malyar Kyiv: кузовний ремонт, ремонт будь-якої складності, фарбування авто, гарантія на роботу, ремонт авто з США. Київ, Україна.',
  metadataBase: new URL("https://auto-malyar.vercel.app/"),
  openGraph: {
    title: 'Auto Malyar Kyiv',
    description: 'Auto malyar Kyiv: кузовний ремонт, ремонт будь-якої складності, фарбування авто, гарантія на роботу, ремонт авто з США. Київ, Україна.',
    images: [
      {
        url: `/${logo.src}`,
      },
    ],
  },
};

const RootLayout = async ({ children }: PropsWithChildren) => {
  return (
    <html lang="uk">
      <body
        className={clsx(
          'bg-primary',
          fontDameron.variable,
          fontJost.variable,
          fontBirdman.variable,
        )}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
