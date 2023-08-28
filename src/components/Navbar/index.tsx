'use client';
import clsx from 'clsx';
import Link from 'next/link';
import React, { useMemo, useState } from 'react';

import { useScrollBlock } from '../../helpers/useScrollBlock';
import { HamburgerIcon } from '../icons/Hamburger';
import { LogoAutoMalyar } from '../icons/Logo';
import { InstagramIcon } from '../icons/SocialNetworks/Instagram';
import { TikTokIcon } from '../icons/SocialNetworks/TikTok';

import { SOCIAL_NETWORK_LINKS } from '@/constants/contacts';

export const Navbar = () => {
  const [isMobileNavBarOpen, setIsMobileNavBarOpen] = useState(false);
  const year = useMemo(() => new Date().getFullYear(), []);
  const [blockScroll, allowScroll] = useScrollBlock();

  const handleClick = (isOpenMobileNavBar: boolean = true) => {
    setIsMobileNavBarOpen(isOpenMobileNavBar);

    if (isOpenMobileNavBar) {
      blockScroll();
    } else {
      allowScroll();
    }
  };

  return (
    <nav
      className={clsx(
        'grid grid-cols-2 items-center bg-primary px-9 font-jost uppercase text-white/30 md:grid-cols-none md:px-12 lg:pl-20 lg:pr-16',
        isMobileNavBarOpen
          ? 'grid-rows-[auto_1fr_1fr]'
          : 'md:grid-flow-col md:justify-between',
      )}
    >
      <div className="z-4 my-9">
        <LogoAutoMalyar width={127} height={32} />
      </div>
      <div
        className="z-4 my-9 cursor-pointer justify-self-end md:hidden"
        onClick={() => handleClick(!isMobileNavBarOpen)}
      >
        <HamburgerIcon isOpen={isMobileNavBarOpen} />
      </div>
      <div
        className={clsx(
          'md:block',
          isMobileNavBarOpen ? 'z-4 col-span-2 mt-16' : 'hidden',
        )}
      >
        <div className="text-center md:block">
          <ul className="flex flex-col gap-16 md:flex-row">
            <li className="hover:text-white">
              <Link href="#main-section" onClick={() => handleClick(false)}>
                Головна
              </Link>
            </li>
            <li className="hover:text-white">
              <Link href="#painting-section" onClick={() => handleClick(false)}>
                Сервіси
              </Link>
            </li>
            <li className="hover:text-white">
              <Link href="#info-contacts-section" onClick={() => handleClick(false)}>
                Контакти
              </Link>
            </li>
            <li className="hover:text-white">
              <Link href="#gallery-section" onClick={() => handleClick(false)}>
                галерея
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={clsx(
          'md:hidden',
          isMobileNavBarOpen ? 'z-4 col-span-2 grid gap-y-10' : 'hidden',
        )}
      >
        <div>
          <div className="flex">
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
        </div>
        <div className="">© {year} «Automalyar». Всі права захищені.</div>
      </div>
    </nav>
  );
};
