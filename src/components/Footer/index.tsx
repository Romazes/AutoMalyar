import { useMemo } from 'react';

import { InstagramIcon } from '../icons/SocialNetworks/Instagram';
import { TikTokIcon } from '../icons/SocialNetworks/TikTok';

import { SOCIAL_NETWORK_LINKS } from '@/constants/contacts';

export const Footer = () => {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="mx-9 mt-20 grid h-[120px] grid-cols-[auto_1frs] items-center font-jost text-white/30 lg:mx-17-5 lg:grid-cols-[auto_1fr_1fr]">
      <div className="order-2 lg:order-1 lg:mr-14 hidden lg:block">Automalyar</div>
      <div className="order-1 col-span-2 flex gap-x-16 lg:order-2 lg:col-auto">
        <div className="flex gap-x-5">
          <div>Більше проектів тут:</div>
          <a href={SOCIAL_NETWORK_LINKS.instagram} target="_blank">
            <InstagramIcon />
          </a>
          <a href={SOCIAL_NETWORK_LINKS.tiktok} target="_blank">
            <TikTokIcon />
          </a>
        </div>
      </div>
      <div className="order-3 flex lg:justify-self-end">
        <div className="hidden">Credits</div>
        <div>© {year} «Automalyar».Всі права захищені.</div>
      </div>
    </footer>
  );
};
