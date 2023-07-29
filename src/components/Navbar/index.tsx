import Link from 'next/link';
import React from 'react';

import { HamburgerIcon } from '../icons/Hamburger';
import { LogoAutoMalyar } from '../icons/Logo';

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-10 flex h-[92px] items-center justify-between bg-primary pl-9 pr-9 font-jost uppercase text-white/30 md:pl-12 md:pr-12 lg:pl-20 lg:pr-16">
      <div>
        <LogoAutoMalyar
          className="visible md:invisible"
          width={236}
          height={86}
        />
      </div>
      <div className="cursor-pointer md:hidden">
        <HamburgerIcon />
      </div>
      <div className="hidden md:block">
        <ul className="flex gap-16">
          <li>
            <Link href="#" className="text-white">
              Головна
            </Link>
          </li>
          <li>
            <Link href="#">Сервіси</Link>
          </li>
          <li>
            <Link href="#">Контакти</Link>
          </li>
          <li>
            <Link href="#">галерея</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
