import Image from 'next/image';

import { LogoAutoMalyar } from '../icons/Logo';

import FerrariBgImage from '@/../public/images/ferrari_main_shadow.png';
import GradientArrow from '@/../public/images/gradient-arrow.svg';
import { Button } from '@/components/Buttons';

export const Main = () => {
  return (
    <div
      //92px - height of NavBar
      className="flex flex-col-reverse md:h-[calc(100vh-92px)] md:flex-row"
    >
      <div>
        <div className="ml-9 hidden md:block lg:ml-20">
          <LogoAutoMalyar />
        </div>
        <div className="ml-9 lg:ml-36">
          <div className="mt-20 md:mt-4 lg:mt-20">
            <p className="text font-jost">
              Професіональне фарбування авто,
              <br />а також виправлення будь-яких дефектів
            </p>
          </div>
          <div className="mt-10 md:mt-4 lg:mt-20">
            <Button>Почнемо</Button>
          </div>
          <div className="mt-20 flex flex-wrap gap-x-14 gap-y-4 font-jost text-xl text-white/40 md:mt-4 md:flex-nowrap lg:mt-20">
            <div>
              <h2>ШВИДКО</h2>
              <h3 className="mt-6 text-sm text-white/25">
                Швидко, на <br />
                скільки можливо
              </h3>
            </div>
            <div>
              <h2>БЕЗПЕЧНО</h2>
              <h3 className="mt-6 text-sm text-white/25">
                Безпечно для авто <br />
                та гаманця
              </h3>
            </div>
            <div>
              <h2>ЯКІСНО</h2>
              <h3 className="mt-6 text-sm text-white/25">
                Найкращий сервіс <br />
                та матеріали
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="relative grow">
        <Image
          src={GradientArrow}
          alt="gradient background image"
          className="min-h-[267px] min-w-[350px]"
        />
        <Image
          src={FerrariBgImage}
          alt="background image"
          className="absolute bottom-[-80px] w-full md:bottom-0"
        />
      </div>
    </div>
  );
};
