import type { FC } from 'react';
import React from 'react';

type LabelBetweenPageProps = { children: string };

export const LabelBetweenPage: FC<LabelBetweenPageProps> = ({ children }) => {
  return (
    <div className="flex flex-col items-center gap-y-2.5 font-jost text-sm uppercase text-white/20">
      <p>{children}</p>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="8"
          viewBox="0 0 23 8"
          fill="none"
        >
          <path
            opacity="0.2"
            d="M1 1L11.5 6.5L22 1"
            stroke="white"
            stroke-linecap="round"
          />
        </svg>
      </div>
    </div>
  );
};
