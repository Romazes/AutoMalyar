'use client';
import clsx from 'clsx';
import Link from 'next/link';
import React, { useState } from 'react';

import { HamburgerIcon } from '../icons/Hamburger';
import { LogoAutoMalyar } from '../icons/Logo';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="top-0 z-10 flex h-[92px] items-center justify-between bg-primary pl-9 pr-9 font-jost uppercase text-white/30 md:pl-12 md:pr-12 lg:pl-20 lg:pr-16">
      <div className="z-4">
        <LogoAutoMalyar width={127} height={32} />
      </div>
      <div
        className="z-4 cursor-pointer md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <HamburgerIcon />
      </div>
      <div className="hidden md:block">
        <ul className="flex gap-16">
          <li className="hover:text-white">
            <Link href="#main-section">Головна</Link>
          </li>
          <li className="hover:text-white">
            <Link href="#painting-section">Сервіси</Link>
          </li>
          <li className="hover:text-white">
            <Link href="#info-contacts-section">Контакти</Link>
          </li>
          <li className="hover:text-white">
            <Link href="#gallery-section">галерея</Link>
          </li>
        </ul>
      </div>
      <div
        className={clsx(
          'fixed z-3 h-8 w-8 rounded-[50%] bg-primary transition-transform duration-[1000ms] top-[30px] right-[40px]',
          isOpen ? 'scale-[90]' : 'scale-0',
        )}
      ></div>
    </nav>
  );
};
