import Image from 'next/image';

import { Button } from '../Buttons';
import { DownArrowHalfRound } from '../icons/DownArrowHalfRound';
import { RightArrowThinIcon } from '../icons/RightArrowThin';

import BackgroundNumberImg from '@/../public/images/bg-number-03.png';
import LicensePlates from '@/../public/images/license-plates.png';

export const FullRestorationImportedCar = () => {
  const typeArrowShow = (
    isClockwiseDirection?: boolean,
    strokeOpacity?: number,
  ) => {
    return (
      <>
        <div className="hidden lg:inline-block">
          <RightArrowThinIcon strokeOpacity={strokeOpacity} />
        </div>
        <div className="inline-block lg:hidden">
          <DownArrowHalfRound
            strokeOpacity={strokeOpacity}
            clockwiseDirection={isClockwiseDirection}
          />
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="relative grid md:grid-cols-2">
        <div className="absolute left-0 top-0 h-[242px] w-[364px] lg:h-[506px] lg:w-[762px]">
          <Image src={BackgroundNumberImg} alt="цифра 03" />
        </div>
        <div className="ml-9 mr-9 grid auto-rows-max lg:ml-36">
          <div className="flex w-full items-center">
            <h1 className="font-birdman text-6-5xl text-primary drop-shadow-primary-text md:text-8xl">
              03
            </h1>
            <h2 className="ml-6 whitespace-nowrap font-jost text-2xl uppercase md:ml-14 md:text-4xl">
              повна реставрація <br /> пригнанного авто
            </h2>
          </div>
          <div className="mr-9 mt-12 lg:mr-48 lg:mt-24">
            <p>
              Ми пропонуємо повну реставрацію авто з Америки. Бла бла бла бла,
              бла бла, також бла бла бла і бла бла. Запишіться на консультацію,
              щоб дізнатися, які саме послуги потрібні вашому пригнаному авто.
            </p>
            <p className="mt-8">
              Кожна реставрація починається з консультації майстра. Після чого
              ви приганяєте авто в салон, де будуть проводитися усі необхідні
              роботи. Така робота займає приблизно тижня. Вам лиш необхідно
              чекати дзвінка
            </p>
          </div>
          <div className="mt-14">
            <Button className="w-full text-base">Записатися на Огляд</Button>
          </div>
        </div>
        <div className="ml-auto max-w-full overflow-hidden">
          <Image
            src={LicensePlates}
            alt="автомобільні номерні знаки з різних країн"
          />
        </div>
      </div>
      <div className="containerRestorationSteps justify-center gap-30 text-white/40 lg:ml-36 lg:justify-start">
        <div className="numberFirst text-white/70">I.</div>
        <div className="titleFirst text-white/70">Діагностика/Огляд</div>
        <div className="arrowFirst">{typeArrowShow()}</div>
        <div className="numberSecond">II.</div>
        <div className="titleSecond">Виправлення дефектів</div>
        <div className="arrowSecond">{typeArrowShow(false, 0.2)}</div>
        <div className="numberThird">III.</div>
        <div className="titleThird">Окрашування</div>
        <div className="arrowThird">{typeArrowShow(true, 0.2)}</div>
        <div className="numberFourth">IV.</div>
        <div className="titleFourth">Завершувальні роботи</div>
      </div>
    </div>
  );
};
