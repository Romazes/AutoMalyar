import type { FC } from 'react';

import type { BaseIconProps } from '@/types/baseIcon';

type BigCrackIcon = BaseIconProps;

export const BigCrackIcon: FC<BigCrackIcon> = ({
  width = 40,
  height = 40,
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="white"
      opacity={0.2}
      {...props}
    >
      <path d="M18 31C25.1797 31 31 25.1797 31 18C31 14.9829 29.9722 12.2059 28.2476 10V14L22.5 17.5L19.5 23L13.5 24.5V27.5L10 28.2477C12.2059 29.9722 14.9829 31 18 31Z" />
      <path d="M19.8716 14.1957L18.7028 11.77" stroke="white" />
      <path d="M15.485 16.0005L13.8516 14.1079" stroke="white" />
      <path d="M13.6989 20.0679L11.167 18.8071" stroke="white" />
    </svg>
  );
};
