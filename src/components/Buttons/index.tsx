import clsx from 'clsx';
import type { FC, HtmlHTMLAttributes } from 'react';
import React from 'react';

interface ButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {}

export const Button: FC<ButtonProps> = ({ className, children, ...props }) => {
  return (
    <button
      className={clsx(
        'h-[2.875rem] w-[11rem] rounded-btn-3xl bg-secondary font-jost text-2xl font-medium text-black shadow-xl-btn lg:h-[3.75rem] lg:w-[14.5rem]',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
