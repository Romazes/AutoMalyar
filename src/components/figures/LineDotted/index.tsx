import type { FC } from 'react';

import type { BaseIconProps } from '@/types/baseIcon';

type LineDottedFigure = BaseIconProps;

export const LineDottedFigure: FC<LineDottedFigure> = ({
  width = 3,
  height = 775,
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 3 775"
      fill="none"
      {...props}
    >
      <path
        d="M1.49998 0.5L1.49998 348.5M1.49995 774.5L1.49995 398.5"
        stroke="url(#paint0_linear_136_37)"
        strokeWidth={3}
        strokeDasharray="12 12"
      />
      <defs>
        <linearGradient
          id="paint0_linear_136_37"
          x1="0.244807"
          y1="0.999999"
          x2="0.9735"
          y2="774.999"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#202020" />
          <stop offset="0.229167" stopColor="white" />
          <stop offset="0.505208" stopColor="white" />
          <stop offset="0.734375" stopColor="white" />
          <stop offset="1" stopColor="#202020" />
        </linearGradient>
      </defs>
    </svg>
  );
};
