'use client';
import Image from 'next/image';
import React, { useState } from 'react';

import { Button } from '../Buttons';
import { ButtonOutline } from '../Buttons/ButtonOutline';

import BrokenDoor from '@/../public/images/broken-door.png';
import FixedDoor from '@/../public/images/fixed-door.png';

export const HighQualityAlignment = () => {
  const [img, setImg] = useState(BrokenDoor);

  return (
    <div className="mt-14 grid font-jost lg:mt-6 lg:grid-cols-2">
      <div className="order-2 grid auto-rows-max bg-[#1B1B1B] lg:order-1 lg:row-span-2">
        <div className="pt-10">
          <Image src={img} alt="пошкоджені двері машини" />
        </div>
        <div className="flex h-[70px] justify-evenly text-xl">
          <button onClick={() => setImg(BrokenDoor)}>До</button>
          <button onClick={() => setImg(FixedDoor)}>Після</button>
        </div>
      </div>
      <div className="order-1 flex flex-col lg:order-2">
        <div className="mx-9 flex flex-col lg:ml-20 lg:mr-32">
          <div className="text-center">
            <h2 className="text-2xl uppercase md:text-4xl">
              високоякісне вирівнювання
            </h2>
          </div>
          <div className="mt-8 lg:mt-16">
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
      <div className="order-3 mt-11 flex flex-col gap-y-7 px-9 lg:mx-36 lg:mt-16 lg:justify-self-center lg:px-0">
        <div>
          <Button className="w-full text-base">Записатися на Огляд</Button>
        </div>
        <div>
          <ButtonOutline>наша галерея</ButtonOutline>
        </div>
      </div>
    </div>
  );
};
