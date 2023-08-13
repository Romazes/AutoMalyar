import type { FC } from 'react';

import type { BaseIconProps } from '@/types/baseIcon';

type RightArrowThinIconProps = BaseIconProps;

export const RightArrowThinIcon: FC<RightArrowThinIconProps> = ({
  width = 53,
  height = 21,
  strokeOpacity = 0.5,
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 53 21"
      fill="none"
      {...props}
    >
      <path
        d="M0 10.5H51.5M51.5 10.5L42 1M51.5 10.5L42 20"
        stroke="white"
        strokeOpacity={strokeOpacity}
      />
    </svg>
  );
};
