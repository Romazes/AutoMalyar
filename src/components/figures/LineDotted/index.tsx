import type { FC } from 'react';

import type { BaseIconProps } from '@/types/baseIcon';

type LineDottedFigure = BaseIconProps;

export const LineDottedFigure: FC<LineDottedFigure> = ({
  width = 53,
  height = 775,
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 53 775"
      fill="none"
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="M26.5 0.5L26.5 348.5M26.5 774.5L26.5 398.5"
        stroke="url(#paint0_linear_829_118)"
        strokeWidth="3"
        strokeDasharray="12 12"
      />
      <circle
        cx="26.5"
        cy="373.5"
        r="25"
        fill="white"
        fillOpacity="0.5"
        stroke="white"
        strokeWidth="3"
      />
      <path d="M18 382L9 373.5L18 365V382Z" fill="white" />
      <path d="M35 365L44 373.5L35 382L35 365Z" fill="white" />
      <defs>
        <linearGradient
          id="paint0_linear_829_118"
          x1="25.2448"
          y1="0.999999"
          x2="25.9735"
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
