import Image from 'next/image';
import React from 'react';

import { IconTitle } from '../FlexContainer/IconTitle';
import { BigCrackIcon } from '../icons/BigCrack';
import { ScratchIcon } from '../icons/Scratch';
import { SmallCrackIcon } from '../icons/SmallCrack';

import RightSideDestructionCarLensImg from '@/../public/images/right-side-destruction-car-lense.png';
import RightSideDestructionCarImg from '@/../public/images/right-side-destruction-car.png';

export const AnyTypeDestruction = () => {
  const fixingCategories = [
    {
      icon: <BigCrackIcon />,
      title: 'Великі сколи',
    },
    {
      icon: <SmallCrackIcon />,
      title: 'Малі сколи',
    },
    {
      icon: <ScratchIcon />,
      title: 'Подряпини',
    },
  ];

  return (
    <div className="mt-16 grid font-jost lg:mt-32 lg:grid-cols-2">
      <div className="relative order-2 lg:order-1 lg:row-span-2">
        <div className="absolute left-[39%] top-[21.5%] h-[150px] w-[150px] sm:h-[300px] sm:w-[300px] lg:top-[20.5%]">
          <Image
            src={RightSideDestructionCarLensImg}
            alt="збільшене зображення сколу на автівці"
          />
        </div>
        <Image
          src={RightSideDestructionCarImg}
          alt="приклад сколу на автівці з правого боку на крилі"
        />
      </div>
      <div className="order-1 flex flex-col">
        <div className="mx-9 flex flex-col lg:ml-20 lg:mr-32">
          <div className="text-center">
            <h2 className="text-2xl uppercase md:text-4xl">
              Будь-яка форма ушкодження
            </h2>
          </div>
          <div className="mt-16">
            <p>
              Не залежно від складності порушення на вашому корпусі, наші
              майстри використовують високоякісне обладнання для точної
              діагностики та виправлення порушень будь-якого типу та складності.
            </p>
          </div>
          <div className="mt-8">
            <p>
              Для простих вм`ятин використовуется PDR технологія. Тобто
              вирівнювання без порушення шару фарби. Для складних порушень вже
              необхідно використовувати більш радикальні методи: розбір,
              вирівнювання, окрашування та полірування.
            </p>
          </div>
          <div className="mt-8">
            <p>
              Латання застосовується для заржавілих зон. Для цього розбирають
              автомобіль, приварюють шматок металу, фарбують та полірують за
              необхідністю
            </p>
          </div>
        </div>
      </div>
      <div className="order-3 mt-16 text-white/40">
        <div className="ml-12 text-xl md:ml-0">
          <h3>ВИПРАВЛЯЄМО</h3>
        </div>
        <div className="mt-8 grid justify-center gap-x-10 gap-y-8 text-lg text-white/25 md:grid-flow-col md:justify-normal">
          {fixingCategories.map(({ icon, title }) => IconTitle(icon, title))}
        </div>
      </div>
    </div>
  );
};
