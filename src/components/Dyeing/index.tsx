import { CarPaintingContainer } from './CarPaintingContainer';

export const Dyeing = () => {
  return (
    <div className="flex flex-wrap lg:flex-nowrap">
      <div className="flex flex-wrap md:mr-[5.5rem] lg:basis-1/4">
        <div className="flex w-full items-baseline">
          <h1 className="font-birdman text-6-5xl text-primary drop-shadow-primary-text md:text-8xl">
            01
          </h1>
          <h2 className="ml-6 font-jost text-2xl uppercase md:ml-14 md:text-4xl">
            фарбування
          </h2>
        </div>
        <div className="mt-12 md:mt-20">
          <p>
            Ми пропонуємо різні види фарбування. Від рами до невеликої частини
            вашого особистого автомобіля. Наші барвники виготовлені з
            високоякісних матеріалів. Він сумісний з будь-яким автомобілем,
            оскільки має ліцензію наших постачальників.
          </p>
          <p className="mt-8">
            Ви можете пофарбувати як всю раму будь-яким барвником, так і
            пофарбувати окремі частини.
          </p>
        </div>
      </div>
      <div className="ml-[-2.25rem] bg-primary-light lg:basis-3/4 lg:rounded-l-4xl">
        <CarPaintingContainer />
      </div>
    </div>
  );
};
