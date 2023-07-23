import { Button } from "@/components/Buttons";
import { GradientArrowIcon } from "@/components/icons/GradientArrow";

const Home = () => {
  return (
    <main className="text-white pl-36">
      <div className="flex">
        <div>
          <div>
            <h1 className="font-dameron leading-default-normal text-6-5xl">
              Auto
              <br />
              malyar
            </h1>
          </div>
          <div></div>
          <div className="mt-20">
            <p className="font-jost text">
              Професіональне фарбування авто,
              <br />а також виправлення будь-яких дефектів
            </p>
          </div>
          <div className="mt-20">
            <Button>Почнемо</Button>
          </div>
          <div className="flex font-jost text-xl text-white/40 mt-20">
            <div className="mr-14">
              <h2>ШВИДКО</h2>
              <h3 className="text-sm text-white/25 mt-6">
                Швидко, на <br />
                скільки можливо
              </h3>
            </div>
            <div className="mr-14">
              <h2>БЕЗПЕЧНО</h2>
              <h3 className="text-sm text-white/25 mt-6">
                Безпечно для авто <br />
                та гаманця
              </h3>
            </div>
            <div>
              <h2>ЯКІСНО</h2>
              <h3 className="text-sm text-white/25 mt-6">
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
