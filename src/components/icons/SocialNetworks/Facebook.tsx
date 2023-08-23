import type { FC } from 'react';

import type { BaseIconProps } from '@/types/baseIcon';

type FacebookIconProps = BaseIconProps;

export const FacebookIcon: FC<FacebookIconProps> = ({
  width = 20,
  height = 20,
  fill = '#1CFFF1',
}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill={fill}>
      <path d="M18.3333 9.99984C18.3333 5.39984 14.6 1.6665 9.99999 1.6665C5.39999 1.6665 1.66666 5.39984 1.66666 9.99984C1.66666 14.0332 4.53332 17.3915 8.33332 18.1665V12.4998H6.66666V9.99984H8.33332V7.9165C8.33332 6.30817 9.64166 4.99984 11.25 4.99984H13.3333V7.49984H11.6667C11.2083 7.49984 10.8333 7.87484 10.8333 8.33317V9.99984H13.3333V12.4998H10.8333V18.2915C15.0417 17.8748 18.3333 14.3248 18.3333 9.99984Z" />
    </svg>
  );
};
