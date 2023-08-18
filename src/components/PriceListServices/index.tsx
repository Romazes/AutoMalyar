import { useMemo } from 'react';

import { PriceListServiceTableBody } from './PriceListServiceTableBody';
import { PriceListServiceTableHeader } from './PriceListServiceTableHeader';

export const PriceListServices = () => {
  const dateNow = useMemo(() => new Date().toLocaleDateString('uk-UA'), []);

  const serviceList = [
    {
      id: 0,
      name: 'Повне фарбування автомобіля',
      price: 'від 5000 ₴ до 46000 ₴',
      duration: 'від 2 до 7 днів',
    },
    {
      id: 1,
      name: 'Локальне фарбування деталей',
      price: 'від 4500 ₴  до 8000 ₴',
      duration: 'від 2 до 7 днів',
    },
    {
      id: 2,
      name: 'Відновлення геометрії кузова',
      price: 'від 1000 ₴ до 6000 ₴',
      duration: '10 годин',
    },
    {
      id: 3,
      name: 'Відновлення автомобіля після ДТП',
      price: 'від 3000 ₴ до 20000 ₴',
      duration: 'від 1 до 7 днів',
    },
    {
      id: 4,
      name: 'Виправлення деформацій, Полірування фар',
      price: 'fixed on 5000₴',
      duration: '4 години',
    },
    {
      id: 5,
      name: 'Ремонт пластику',
      price: 'від 2000₴ до 10000₴',
      duration: 'від 10 годин до 7 днів',
    },
    {
      id: 6,
      name: 'Зварювальні роботи',
      price: 'від 10000₴ до 50000₴',
      duration: 'від 2 до 5 днів',
    },
    {
      id: 7,
      name: 'Повне відновлення автомобіля з Америки',
      price: 'від 10000₴ до 50000₴',
      duration: '1 місяц',
    },
  ];

  return (
    <div className="my-14 lg:mx-35 lg:my-19">
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
        <PriceListServiceTableHeader />
        {serviceList.map((i) => (
          <PriceListServiceTableBody key={i.id} {...i} />
        ))}
      </div>
    </div>
  );
};
