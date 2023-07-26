import { PaintTypeWithRoundShapeColor } from './PaintTypeWithRoundShapeColor';

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
    <div className="grid grid-cols-1 items-center md:grid-cols-2">
      <div className="col-span-2 mt-16 flex justify-evenly md:mt-24">
        <button className="uppercase underline underline-offset-6">рама</button>
        <button className="uppercase underline underline-offset-6">
          деталь
        </button>
      </div>
      <div className="col-span-2 mt-[4.375rem] grid grid-cols-2 gap-y-5 md:col-span-1 md:mt-[5.625rem] md:grid-cols-1">
        {paintTypes.map(({ colorClassName, paintTypeName }) => (
          <PaintTypeWithRoundShapeColor
            key={colorClassName}
            paintTypeName={paintTypeName}
            roundShapeColorClassName={colorClassName}
          />
        ))}
      </div>
      <div className="col-span-2 md:col-span-1">
        Стандартна акрилова фарба для автомобіля має такі переваги: доступність,
        широкий вибір кольорів, легкість нанесення та швидке висихання. Однак
        він також має недоліки, такі як обмежена довговічність, підвищена
        сприйнятливість до подряпин і відколів, а також обмежена стійкість до
        хімічних речовин і погодних умов.
      </div>
      <div className="col-span-2">
        <p>*візуалізація, а не остаточний вигляд вашого автомобіля</p>
      </div>
    </div>
  );
};
