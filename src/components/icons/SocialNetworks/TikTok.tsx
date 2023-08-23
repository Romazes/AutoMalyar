import type { FC } from 'react';

import type { BaseIconProps } from '@/types/baseIcon';

type TikTokIconProps = BaseIconProps;

export const TikTokIcon: FC<TikTokIconProps> = ({
  width = 20,
  height = 20,
  fill = '#1CFFF1',
}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill={fill}>
      <path d="M13.8333 4.85C13.2637 4.19969 12.9498 3.36453 12.95 2.5H10.375V12.8333C10.3551 13.3925 10.1191 13.9222 9.71648 14.3108C9.31389 14.6994 8.77621 14.9166 8.21667 14.9167C7.03334 14.9167 6.05001 13.95 6.05001 12.75C6.05001 11.3167 7.43334 10.2417 8.85834 10.6833V8.05C5.98334 7.66667 3.46667 9.9 3.46667 12.75C3.46667 15.525 5.76668 17.5 8.20834 17.5C10.825 17.5 12.95 15.375 12.95 12.75V7.50833C13.9942 8.25821 15.2478 8.66054 16.5333 8.65833V6.08333C16.5333 6.08333 14.9667 6.15833 13.8333 4.85Z" />
    </svg>
  );
};
