import Image from 'next/image';

import { LogoAutoMalyar } from '../icons/Logo';

import FerrariBgImage from '@/../public/images/ferrari_main_shadow.png';
import { Button } from '@/components/Buttons';
import { GradientArrowIcon } from '@/components/icons/GradientArrow';

export const Main = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row">
      <div>
        <div className="hidden md:block">
          <LogoAutoMalyar />
        </div>
        <div className="">
          <div className="mt-20">
            <p className="text font-jost">
              Професіональне фарбування авто,
              <br />а також виправлення будь-яких дефектів
            </p>
          </div>
          <div className="mt-20">
            <Button>Почнемо</Button>
          </div>
          <div className="mt-20 flex font-jost text-xl text-white/40">
            <div className="mr-14">
              <h2>ШВИДКО</h2>
              <h3 className="mt-6 text-sm text-white/25">
                Швидко, на <br />
                скільки можливо
              </h3>
            </div>
            <div className="mr-14">
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
      <div className="relative">
        <div className="">
          <GradientArrowIcon className="h-[320px] w-[432.52px] lg:h-[492px] lg:w-[661px]" />
        </div>
        <div className="absolute bottom-[-40px]">
          <Image
            src={FerrariBgImage}
            alt="background image"
          />
        </div>
      </div>
    </div>
  );
};
