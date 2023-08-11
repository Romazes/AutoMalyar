import Image from 'next/image';

import ComparisonSlider from '../ComparisonSlider';

import BackgroundNumberImg from '@/../public/images/bg-number-02.png';
import TopPositionDamagedCar from '@/../public/images/restore-damaged-car.png';
import BottomPositionFixedCar from '@/../public/images/restore-fixed-car.png';

export const Restoration = () => {
  return (
    <div className="relative grid gap-y-9 md:grid-cols-2">
      <div className="absolute left-0 top-0 h-[242px] w-[364px] lg:h-[506px] lg:w-[762px]">
        <Image src={BackgroundNumberImg} alt="цифра 02" />
      </div>
      <div className="mx-9 flex flex-wrap lg:mx-36">
        <div className="flex w-full items-baseline">
          <h1 className="font-birdman text-6-5xl text-primary drop-shadow-primary-text md:text-8xl">
            02
          </h1>
          <h2 className="ml-6 font-jost text-2xl uppercase md:ml-14 md:text-4xl">
            відновлення
          </h2>
        </div>
        <div className="mt-12 lg:mt-24">
          <p>
            Відновлюємо будь-яку проблему на вашій рамі. Викликано нещасним
            випадком або з інших причин. Вам потрібно лише показати своє авто
            нашим майстрам. Вони проконсультують вас щодо будь-якої необхідної
            інформації.
          </p>
          <p className="mt-8">
            Ми виконуємо три основні роботи:{' '}
            <span className="text-primary">просте вирівнювання (PDR)</span>,{' '}
            <span className="text-primary">жорстке вирівнювання</span> - включає
            демонтаж, вирівнювання, фарбування та полірування - і{' '}
            <span className="text-primary">латання</span> пошкоджених зон. Все
            залежить від того, наскільки пошкоджений будь-який компонент.
          </p>
        </div>
      </div>
      <div>
        <ComparisonSlider
          topImg={TopPositionDamagedCar}
          bottomImg={BottomPositionFixedCar}
        />
      </div>
    </div>
  );
};
