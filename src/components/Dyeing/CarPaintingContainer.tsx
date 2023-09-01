'use client';
import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';

import { DetailPaintingContainerItem } from './DetailPaintingContainerItem';
import { PaintTypeWithRoundShapeColor } from './PaintTypeWithRoundShapeColor';

import ChromePaint from '@/../public/icons/chrome-orb.svg';
import ClassicPaint from '@/../public/icons/classic-orb.svg';
import MattePaint from '@/../public/icons/matte-orb.svg';
import MetallicPaint from '@/../public/icons/metallic-orb.svg';
import OilPaint from '@/../public/icons/oil-orb.svg';
import ChromePaintCar from '@/../public/images/chrome-paint-car.png';
import ClassicPaintCar from '@/../public/images/classic-paint-car.png';
import MattePaintCar from '@/../public/images/matte-paint-car.png';
import MetallicPaintCar from '@/../public/images/metallic-paint-car.png';
import OilPaintCar from '@/../public/images/oil-paint-car.png';

export const CarPaintingContainer = () => {
  const paintTypes = [
    {
      id: 0,
      paintName: 'класична',
      paintImage: ClassicPaint,
      paintCarImage: ClassicPaintCar,
    },
    {
      id: 1,
      paintName: 'металік',
      paintImage: MetallicPaint,
      paintCarImage: MetallicPaintCar,
    },
    {
      id: 2,
      paintName: 'хромування',
      paintImage: ChromePaint,
      paintCarImage: ChromePaintCar,
    },
    {
      id: 3,
      paintName: 'матова',
      paintImage: MattePaint,
      paintCarImage: MattePaintCar,
    },
    {
      id: 4,
      paintName: 'масляна',
      paintImage: OilPaint,
      paintCarImage: OilPaintCar,
    },
  ];

  const [cardId, setCarId] = useState(0);
  const [btnNumber, setBtnNumber] = useState(0);

  enum PaintBlockType {
    Full,
    Detail,
  }

  const [typePaintBlock, setTypePaintBlock] = useState<PaintBlockType>(
    PaintBlockType.Full,
  );

  const paintBlock = () => {
    switch (typePaintBlock) {
      case PaintBlockType.Full:
        return (
          <div className="grid grid-cols-2 md:grid-cols-3">
            <div className="col-span-2 mt-[4.375rem] pr-[18px] md:col-span-1">
              <div className="grid grid-cols-2 gap-y-5 md:grid-cols-1">
                {paintTypes.map(({ id, paintImage, paintName }) => (
                  <PaintTypeWithRoundShapeColor
                    key={id}
                    name={paintName}
                    image={paintImage}
                    isActive={id == cardId}
                    clickHandler={() => setCarId(id)}
                  />
                ))}
              </div>
            </div>
            <div className="col-span-2 mx-8 mt-20 md:mt-14">
              <div>
                <Image
                  src={paintTypes[cardId].paintCarImage}
                  alt={paintTypes[cardId].paintName + ' фарба для авто'}
                  placeholder="blur"
                />
              </div>
              <div className="mt-11 text-sm">
                Стандартна акрилова фарба для автомобіля має такі переваги:
                доступність, широкий вибір кольорів, легкість нанесення та
                швидке висихання. Однак він також має недоліки, такі як обмежена
                довговічність, підвищена сприйнятливість до подряпин і відколів,
                а також обмежена стійкість до хімічних речовин і погодних умов.
              </div>
            </div>
          </div>
        );
      case PaintBlockType.Detail:
        return <DetailPaintingContainerItem />;
    }
  };

  return (
    <div className="grid grid-cols-2 items-center font-jost text-white/50 md:grid-cols-3">
      <div className="col-span-2 mt-16 flex justify-evenly text-xl text-white md:col-span-3 md:mt-24">
        <button
          className={clsx(
            'uppercase underline underline-offset-6',
            btnNumber == 0 && 'text-primary-cyan',
          )}
          onClick={() => {
            setBtnNumber(0);
            setTypePaintBlock(PaintBlockType.Full);
          }}
        >
          повне
        </button>
        <button
          className={clsx(
            'uppercase underline underline-offset-6',
            btnNumber == 1 && 'text-primary-cyan',
          )}
          onClick={() => {
            setBtnNumber(1);
            setTypePaintBlock(PaintBlockType.Detail);
          }}
        >
          окремі деталі
        </button>
      </div>
      <div className="col-span-3 md:mt-14">{paintBlock()}</div>
      <div className="col-span-3 mb-6 ml-6 mt-16 text-xs md:mb-11 md:ml-11">
        <p>*візуалізація, а не остаточний вигляд вашого автомобіля</p>
      </div>
    </div>
  );
};
