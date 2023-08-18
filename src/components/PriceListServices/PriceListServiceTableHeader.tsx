export const PriceListServiceTableHeader = () => {
  return (
    <div className="mt-8 grid grid-cols-2 grid-rows-2 items-center text-center uppercase text-white/50 lg:grid-cols-3 lg:grid-rows-[63px]">
      <div className="col-span-2 flex h-full items-center justify-center bg-[#FFFFFF]/[.03] lg:col-span-1 lg:bg-inherit">
        Тип послуги
      </div>
      <div className="bg-[#FFFFFF]/10 lg:bg-inherit">
        ціна
        <br />
        <span className="normal-case">(від мін до макс.)</span>
      </div>
      <div className="bg-[#FFFFFF]/10 lg:bg-inherit">
        тривалість
        <br />
        <span className="normal-case">(від мін до макс.)</span>
      </div>
    </div>
  );
};
