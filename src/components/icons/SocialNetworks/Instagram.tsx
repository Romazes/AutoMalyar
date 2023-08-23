import type { FC } from 'react';

import type { BaseIconProps } from '@/types/baseIcon';

type InstagramIconProps = BaseIconProps;

export const InstagramIcon: FC<InstagramIconProps> = ({
  width = 20,
  height = 20,
  fill = '#1CFFF1',
}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill={fill}>
      <path d="M6.49999 1.6665H13.5C16.1667 1.6665 18.3333 3.83317 18.3333 6.49984V13.4998C18.3333 14.7817 17.8241 16.0111 16.9177 16.9175C16.0112 17.8239 14.7819 18.3332 13.5 18.3332H6.49999C3.83332 18.3332 1.66666 16.1665 1.66666 13.4998V6.49984C1.66666 5.21796 2.17588 3.98858 3.08231 3.08215C3.98873 2.17573 5.21811 1.6665 6.49999 1.6665ZM6.33332 3.33317C5.53767 3.33317 4.77461 3.64924 4.212 4.21185C3.64939 4.77446 3.33332 5.53752 3.33332 6.33317V13.6665C3.33332 15.3248 4.67499 16.6665 6.33332 16.6665H13.6667C14.4623 16.6665 15.2254 16.3504 15.788 15.7878C16.3506 15.2252 16.6667 14.4622 16.6667 13.6665V6.33317C16.6667 4.67484 15.325 3.33317 13.6667 3.33317H6.33332ZM14.375 4.58317C14.6513 4.58317 14.9162 4.69292 15.1116 4.88827C15.3069 5.08362 15.4167 5.34857 15.4167 5.62484C15.4167 5.9011 15.3069 6.16606 15.1116 6.36141C14.9162 6.55676 14.6513 6.6665 14.375 6.6665C14.0987 6.6665 13.8338 6.55676 13.6384 6.36141C13.4431 6.16606 13.3333 5.9011 13.3333 5.62484C13.3333 5.34857 13.4431 5.08362 13.6384 4.88827C13.8338 4.69292 14.0987 4.58317 14.375 4.58317ZM9.99999 5.83317C11.1051 5.83317 12.1649 6.27216 12.9463 7.05356C13.7277 7.83496 14.1667 8.89477 14.1667 9.99984C14.1667 11.1049 13.7277 12.1647 12.9463 12.9461C12.1649 13.7275 11.1051 14.1665 9.99999 14.1665C8.89492 14.1665 7.83511 13.7275 7.05371 12.9461C6.27231 12.1647 5.83332 11.1049 5.83332 9.99984C5.83332 8.89477 6.27231 7.83496 7.05371 7.05356C7.83511 6.27216 8.89492 5.83317 9.99999 5.83317ZM9.99999 7.49984C9.33695 7.49984 8.70106 7.76323 8.23222 8.23207C7.76338 8.70091 7.49999 9.3368 7.49999 9.99984C7.49999 10.6629 7.76338 11.2988 8.23222 11.7676C8.70106 12.2364 9.33695 12.4998 9.99999 12.4998C10.663 12.4998 11.2989 12.2364 11.7678 11.7676C12.2366 11.2988 12.5 10.6629 12.5 9.99984C12.5 9.3368 12.2366 8.70091 11.7678 8.23207C11.2989 7.76323 10.663 7.49984 9.99999 7.49984Z" />
    </svg>
  );
};
