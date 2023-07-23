import Image from 'next/image';

import FerrariBgImage from '@/../public/images/ferrari-bg.png';
import { Button } from '@/components/Buttons';
import { GradientArrowIcon } from '@/components/icons/GradientArrow';

const Home = () => {
  return (
    <main className="pl-9 text-white lg:pl-36">
      <div className="font-dameron">
        <h1 className="text-4xl leading-default-normal md:text-6-5xl">
          Auto
          <br />
          malyar
        </h1>
      </div>
      <div className="flex flex-col-reverse md:flex-row">
        <div>
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
        <div className="relative grow">
          <div className="mt-[-67.2px] md:mt-[-118.4px] clear-both overflow-auto w-[432.52px] h-[320px]">
            <GradientArrowIcon />
          </div>
          <div>
            <Image
              src={FerrariBgImage}
              alt="background image"
              className="absolute bottom-[-40px] right-0"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
