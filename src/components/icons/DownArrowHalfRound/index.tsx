import type { FC } from 'react';

import type { BaseIconProps } from '@/types/baseIcon';

interface DownArrowHalfRoundProps extends BaseIconProps {
  clockwiseDirection?: boolean;
}

export const DownArrowHalfRound: FC<DownArrowHalfRoundProps> = ({
  width = 29,
  height = 60,
  strokeOpacity = 0.5,
  clockwiseDirection = true,
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 29 60"
      fill="none"
      {...props}
    >
      {clockwiseDirection ? (
        <path
          d="M1.16018 53.9067C11.1602 54.76 30.2619 44.5 28.1602 25.5C26.0584 6.5 10.8899 1 1.16018 1M1.16018 53.9067L9.6737 59.4533M1.16018 53.9067L7.64667 44.52"
          stroke="white"
          strokeOpacity={strokeOpacity}
        />
      ) : (
        <path
          d="M28.1601 53.9067C18.1601 54.76 -0.941624 44.5 1.16015 25.5C3.26193 6.5 18.4304 1 28.1601 1M28.1601 53.9067L21.6736 44.52M28.1601 53.9067L19.6466 59.4533"
          stroke="white"
          strokeOpacity={strokeOpacity}
        />
      )}
    </svg>
  );
};
