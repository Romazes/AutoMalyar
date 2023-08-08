import type { FC } from 'react';

import type { BaseIconProps } from '@/types/baseIcon';

type ScratchIconProps = BaseIconProps;

export const ScratchIcon: FC<ScratchIconProps> = ({
  width = 40,
  height = 40,
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      stroke="white"
      opacity={0.2}
      {...props}
    >
      <path
        d="M25.5 8L22.5 12L16 15L14.5 19.5L10.5 24.5L7 27"
        strokeWidth="1.5"
      />
      <path d="M29 10.5L26 14.5L19.5 17.5L18 22L14 27L10.5 29.5" />
      <path
        d="M32.5 12.5L29.5 16.5L23 19.5L21.5 24L17.5 29L14 31.5"
        strokeWidth="0.5"
      />
    </svg>
  );
};
