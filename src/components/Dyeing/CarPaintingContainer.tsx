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
      description: 'Класична акрилова фарба залишається популярним вибором для фарбування автомобілів завдяки своїй надійності і довговічності. Вона забезпечує відмінний захист від корозії і легко відновлюється у разі пошкоджень. Недоліком може бути те, що процес нанесення може вимагати більше часу і вміння, ніж у деяких інших видів фарб.',
    },
    {
      id: 1,
      paintName: 'металік',
      paintImage: MetallicPaint,
      paintCarImage: MetallicPaintCar,
      description:
        'Краска "МЕТАЛІК" ідеально підходить для фарбування автомобіля завдяки своєму ефектному металевому відтінку, який надає авто елегантний вигляд. Вона також маскує дрібні подряпини і недоліки на поверхні, забезпечуючи більш гарний зовнішній вигляд. Проте важливо враховувати, що ремонт краски "МЕТАЛІК" може бути витратним, оскільки спеціалізований колір вимагає точного збігу під час поправок.',
    },
    {
      id: 2,
      paintName: 'хромування',
      paintImage: ChromePaint,
      paintCarImage: ChromePaintCar,
      description: 'Фарбування автомобіля хромом може надати йому розкішний та вражаючий вигляд, привертаючи увагу і відзначаючи вас на дорозі. Крім того, хромована поверхня легко чиститься та захищає метал від корозії. Однак недоліками є висока вартість цього процесу і складність підтримки бездоганного стану хрому впродовж тривалого періоду.',
    },
    {
      id: 3,
      paintName: 'матова',
      paintImage: MattePaint,
      paintCarImage: MattePaintCar,
      description:
        'Фарба з матовим ефектом надає автомобілю стильний та сучасний вигляд, виділяючи його серед інших. Вона допомагає приховати невеликі дефекти та подряпини на поверхні, а також створює унікальний, неметалевий зовнішній вигляд. Проте важливо мати на увазі, що матова фарба вимагає більшого догляду та швидше вигорає при сонячних умовах.',
    },
    {
      id: 4,
      paintName: 'перламутр',
      paintImage: OilPaint,
      paintCarImage: OilPaintCar,
      description: 'Фарбування автомобіля з використанням перламутрового пігменту надає йому чарівний блиск і унікальний мерехтливий відтінок, що робить ваш автомобіль особливим та елегантним. Перламутрові кольори добре маскують дрібні дефекти та царапини, і вони виглядають неймовірно в сонячний чи місячний світло. Проте, слід пам\'ятати, що цей вид фарбування може бути дорожчим, а також потребує спеціального догляду, оскільки він вразливий до подряпин та вигорання.',
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
                {paintTypes[cardId].description}
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
