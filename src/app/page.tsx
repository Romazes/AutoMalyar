import { Button } from '@/components/Buttons';
import { GradientArrowIcon } from '@/components/icons/GradientArrow';

const Home = () => {
  return (
    <main className="pl-36 text-white">
      <div className="flex">
        <div>
          <div>
            <h1 className="font-dameron text-6-5xl leading-default-normal">
              Auto
              <br />
              malyar
            </h1>
          </div>
          <div></div>
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
        <div>
          <GradientArrowIcon />
        </div>
      </div>
    </main>
  );
};

export default Home;
