import Link from 'next/link';
import React from 'react';

import { HamburgerIcon } from '../icons/Hamburger';

export const Navbar = () => {
  return (
    <nav className="ml-9 mr-9 flex h-[92px] items-center justify-between font-jost uppercase text-white/30 md:ml-12 md:mr-12 lg:ml-20 lg:mr-16">
      <div>LOGO</div>
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
