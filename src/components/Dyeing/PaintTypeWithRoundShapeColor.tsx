import clsx from 'clsx';
import type { FC } from 'react';

interface PaintTypeWithRoundShapeColorProps {
  paintTypeName: string;
  roundShapeColorClassName: string;
  isActive?: boolean;
}

export const PaintTypeWithRoundShapeColor: FC<
  PaintTypeWithRoundShapeColorProps
> = ({ paintTypeName, roundShapeColorClassName, isActive = false }) => {
  return (
    <div className="grid grid-cols-2 items-center uppercase">
      <div
        className={clsx(
          'mr-2.5 h-[18px] w-[18px] justify-self-end rounded-full',
          roundShapeColorClassName,
          isActive &&
            'text-primary outline outline-2 outline-offset-2 outline-[#1CFFF1]',
        )}
      ></div>
      <div className={clsx('justify-self-start', isActive && 'text-primary')}>
        {paintTypeName}
      </div>
    </div>
  );
};
