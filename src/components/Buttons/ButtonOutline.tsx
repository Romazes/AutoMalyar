import type { FC } from 'react';
import React from 'react';

import type { ButtonProps } from '.';

export const ButtonOutline: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      className="h-10 w-full font-jost rounded-btn-3xl border border-white/40 bg-transparent text-sm font-normal uppercase text-white/40 lg:h-[2.875rem] lg:w-[14.5rem]"
      {...props}
    >
      {children}
    </button>
  );
};
