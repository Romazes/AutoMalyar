import clsx from 'clsx';
import Image from 'next/image';
import type { FC } from 'react';

interface IPaint {
  name: string;
  image: string;
  isActive?: boolean;
  clickHandler: () => void;
}

export const PaintTypeWithRoundShapeColor: FC<IPaint> = ({
  name,
  image,
  isActive,
  clickHandler,
}) => {
  return (
    <div
      className="grid cursor-pointer grid-cols-2 items-center uppercase"
      onClick={clickHandler}
    >
      <div
        className={clsx(
          'mr-2.5 h-[24px] w-[24px] justify-self-end rounded-full',
          isActive && 'p-0.5 text-primary ring-2 ring-primary-cyan',
        )}
      >
        <Image src={image} alt={name} />
      </div>
      <div className={clsx('justify-self-start', isActive && 'text-primary')}>
        {name}
      </div>
    </div>
  );
};
