import clsx from 'clsx';
import type { FC, HTMLAttributes } from 'react';
import React from 'react';

interface IconTitleDivProps extends HTMLAttributes<HTMLDivElement> {
  icon: React.JSX.Element;
  title: string;
}

export const IconTitle: FC<IconTitleDivProps> = ({
  icon,
  title,
  className,
  ...props
}) => {
  return (
    <div className={clsx('flex items-center gap-x-8', className)} {...props}>
      {icon}
      <h4>{title}</h4>
    </div>
  );
};
