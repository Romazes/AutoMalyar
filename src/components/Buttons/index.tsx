import clsx from "clsx";
import type { FC, HtmlHTMLAttributes } from "react";
import React from "react";

interface ButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {}

export const Button: FC<ButtonProps> = ({ className, children, ...props }) => {
  return (
    <button
      className={clsx(
        "bg-secondary text-black font-jost font-medium text-2xl shadow-xl-btn rounded-btn-3xl w-[11rem] h-[2.875rem] lg:w-[14.5rem] lg:h-[3.75rem]",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
