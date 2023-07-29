import Image from 'next/image';

import { PaintTypeWithRoundShapeColor } from './PaintTypeWithRoundShapeColor';

import DyeClassic from '@/../public/images/dye-classic.png';

export const CarPaintingContainer = () => {
  const paintTypes = [
    {
      paintTypeName: 'класична',
      colorClassName: 'bg-color-gradient-classic-dye',
    },
    {
      paintTypeName: 'металік',
      colorClassName: 'bg-color-gradient-classic-dye',
    },
    {
      paintTypeName: 'хромування',
      colorClassName: 'bg-color-gradient-chromium-dye',
    },
    { paintTypeName: 'матова', colorClassName: 'bg-[#131313]' },
    {
      paintTypeName: 'масляна',
      colorClassName: 'bg-color-gradient-chameleon-dye',
    },
  ];

  return (
    <div className="grid grid-cols-2 items-center font-jost text-white/50 md:grid-cols-3">
      <div className="col-span-2 mt-16 flex justify-evenly text-xl text-white md:col-span-3 md:mt-24">
        <button className="uppercase underline underline-offset-6">рама</button>
        <button className="uppercase underline underline-offset-6">
          деталь
        </button>
      </div>
      <div className="col-span-2 mt-[4.375rem] md:col-span-1 md:mt-0">
        <div className="grid grid-cols-2 gap-y-5 md:grid-cols-1">
          {paintTypes.map(({ colorClassName, paintTypeName }) => (
            <PaintTypeWithRoundShapeColor
              key={colorClassName}
              paintTypeName={paintTypeName}
              roundShapeColorClassName={colorClassName}
            />
          ))}
        </div>
      </div>
      <div className="col-span-2 mx-8 mt-20 md:mt-[7.25rem] md:pr-[90px]">
        <div>
          <Image src={DyeClassic} alt="dye-classic" />
        </div>
        <div className="mt-11 text-sm">
          Стандартна акрилова фарба для автомобіля має такі переваги:
          доступність, широкий вибір кольорів, легкість нанесення та швидке
          висихання. Однак він також має недоліки, такі як обмежена
          довговічність, підвищена сприйнятливість до подряпин і відколів, а
          також обмежена стійкість до хімічних речовин і погодних умов.
        </div>
      </div>
      <div className="col-span-3 mb-6 ml-6 mt-16 text-xs md:mb-11 md:ml-11">
        <p>*візуалізація, а не остаточний вигляд вашого автомобіля</p>
      </div>
    </div>
  );
};
