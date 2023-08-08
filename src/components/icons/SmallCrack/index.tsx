import type { FC } from 'react';

import type { BaseIconProps } from '@/types/baseIcon';

type SmallCrackIcon = BaseIconProps;

export const SmallCrackIcon: FC<SmallCrackIcon> = ({
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
      <path d="M22 34.0001C29.1797 34.0001 35 28.1798 35 21.0001C35 13.8204 29.1797 8.00012 22 8.00012C21.0611 8.00012 20.1455 8.09965 19.2632 8.28872L19.6053 10.0528L15.8421 11.7633L14.1316 15.1843L10.3684 16.8949V20.3159L9 21.0001C9 28.1798 14.8203 34.0001 22 34.0001Z" />
      <path d="M12.7047 7.49412L11.5358 5.06848" stroke="white" />
      <path d="M8.31804 9.29893L6.68457 7.40637" stroke="white" />
      <path d="M6.53189 13.3664L4 12.1056" stroke="white" />
    </svg>
  );
};
