import { useMemo } from 'react';

export const PriceListServices = () => {
  const dateNow = useMemo(() => new Date().toLocaleDateString('uk-UA'), []);

  return (
    <div className="mt-14 lg:mx-35 lg:my-19">
      <div className="relative overflow-hidden bg-[#222222] shadow-price-tab">
        <div className="flex flex-col">
          <div className="pl-4 pt-4 text-white/10 lg:pl-10 lg:pt-10">
            {dateNow}
          </div>
          <div className="grow text-center">
            <h1 className="font-jost text-2xl uppercase leading-none lg:text-4-5xl">
              Авто-Майстерня
            </h1>
          </div>
        </div>
        <div className="absolute right-[-36px] top-[25px] w-[160px] rotate-45 transform bg-secondary py-1 text-center font-jost text-xl uppercase text-black lg:right-[-50px]  lg:top-[40px] lg:w-[220px] lg:text-3xl">
          знижка
        </div>
        <div className="h-[500px]"></div>
      </div>
    </div>
  );
};
