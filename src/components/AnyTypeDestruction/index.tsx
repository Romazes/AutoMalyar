import Image from 'next/image';
import React from 'react';

import RightSideDestructionCarImg from '@/../public/images/right-side-destruction-car.png';

export const AnyTypeDestruction = () => {
  return (
    <div className="grid lg:grid-cols-2 mt-16 lg:mt-32 font-jost">
      <div className="order-2 lg:order-1 lg:row-span-2">
        <Image
          src={RightSideDestructionCarImg}
          alt="приклад сколу на автівці з правого боку на крилі"
        />
      </div>
      <div className="order-1 flex flex-col">
        <div className="mx-9 lg:ml-20 lg:mr-32 flex flex-col">
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
        <div className="text-xl">
          <h3>ВИПРАВЛЯЄМО</h3>
        </div>
        <div className="flex text-white/25">
          <div>
            <h4>Великі сколи</h4>
          </div>
          <div>
            <h4>Малі сколи</h4>
          </div>
          <div>
            <h4>Подряпини</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
