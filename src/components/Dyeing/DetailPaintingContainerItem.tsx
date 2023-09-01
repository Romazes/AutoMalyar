import Image from 'next/image';

import { CarDetailPainting } from './CarDetailPainting';

import DetailCarPaint from '@/../public/images/detail-paint-car.png';

export const DetailPaintingContainerItem = () => {
  return (
    <div className="mt-10 max-h-[422.66px] max-w-[764px] md:mt-0">
      <div className="relative mx-14">
        <div>
          <CarDetailPainting className="relative z-2" />
          <Image
            src={DetailCarPaint}
            alt="фарбування окремих деталей автомобіля"
            className="absolute top-0 z-1 w-full opacity-50"
          />
        </div>
        <div className="pr-[18px] text-sm">
          Ви також можете здійснити фарбування окремих деталей свого авто. Це
          дуже зручно, економить ваш час і гроші. Наші майстрі дуже уважно
          відносять до підбору фарби, щоб вона не відрізнялася від других частин
          кузов. Все буде виконане на професійному рівні, &quot;Товщиномір&quot;
          відображатиме малі похибки. Зателефонуйте нам - ми вас проконсультуємо
          і назначимо час коли вам під`їхати.
        </div>
      </div>
    </div>
  );
};
