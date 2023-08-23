import Image from 'next/image';

import { CarPaintingContainer } from './CarPaintingContainer';

import { Button } from '../Buttons';
import { ButtonOutline } from '../Buttons/ButtonOutline';
import { LabelBetweenPage } from '../Label/LabelBetweenPage';

import BackgroundNumberImg from '@/../public/images/bg-number-01.png';

export const Dyeing = () => {
  return (
    <div id="painting-section" className="relative grid gap-y-9 lg:grid-cols-2">
      <div className="absolute left-0 top-0 h-[232px] w-[188px] lg:h-[490px] lg:w-[396px]">
        <Image src={BackgroundNumberImg} alt="цифра 01" />
      </div>
      <div className="mx-9 flex flex-wrap lg:mx-36">
        <div className="flex w-full items-baseline">
          <h1 className="font-birdman text-6-5xl text-primary drop-shadow-primary-text md:text-8xl">
            01
          </h1>
          <h2 className="ml-6 font-jost text-2xl uppercase md:ml-14 md:text-4xl">
            фарбування
          </h2>
        </div>
        <div className="mt-12 md:mt-24">
          <p>
            Ми пропонуємо різні види фарбування. Від рами до невеликої частини
            вашого особистого автомобіля. Наші барвники виготовлені з
            високоякісних матеріалів. Він сумісний з будь-яким автомобілем,
            оскільки має ліцензію наших постачальників.
          </p>
          <p className="mt-8">
            Ви можете вибрати між <span className="text-primary">повним</span>{' '}
            фарбуванням автомобіля одним барвником або фарбуванням окремих{' '}
            <span className="text-primary">деталей</span>.
          </p>
        </div>
      </div>
      <div className="row-span-2 bg-primary-light lg:rounded-l-4xl">
        <CarPaintingContainer />
      </div>
      <div className="flex flex-col gap-y-7 px-9 lg:mx-36 lg:px-0">
        <div>
          <Button className="w-full text-base">Обрати Стиль</Button>
        </div>
        <div>
          <ButtonOutline>наша галерея</ButtonOutline>
        </div>
      </div>
      <div className="justify-self-center lg:col-span-2">
        <LabelBetweenPage>пошкоджена фарба ?</LabelBetweenPage>
      </div>
    </div>
  );
};
