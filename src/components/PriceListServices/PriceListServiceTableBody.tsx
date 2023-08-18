import type { FC } from 'react';

interface IPriceListServiceTableBody {
  name: string;
  price: string;
  duration: string;
}

export const PriceListServiceTableBody: FC<IPriceListServiceTableBody> = (props) => {
  return (
    <div className="grid grid-cols-2 grid-rows-[37px_52px] items-center text-center text-white/50 lg:grid-cols-3 lg:grid-rows-[63px] lg:hover:bg-[#FFFFFF]/[.05]">
      <div className="col-span-2 flex h-full items-center justify-center bg-[#FFFFFF]/[.03] lg:col-span-1 lg:bg-inherit">
        {props.name}
      </div>
      <div className="flex h-full items-center justify-center bg-[#FFFFFF]/10 lg:bg-inherit">
        {props.price}
      </div>
      <div className="flex h-full items-center justify-center bg-[#FFFFFF]/10 lg:bg-inherit">
        {props.duration}
      </div>
    </div>
  );
};
