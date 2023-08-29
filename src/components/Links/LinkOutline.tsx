import clsx from 'clsx';
import Link from 'next/link';
import type { FC } from 'react';

import type { PrimaryLinkProps } from '.';

export const LinkOutline: FC<PrimaryLinkProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Link
      className={clsx(
        'flex h-10 w-full items-center justify-center rounded-btn-3xl border border-white/40 bg-transparent font-jost text-sm font-normal uppercase text-white/40 lg:h-[2.875rem] lg:w-[14.5rem]',
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
};
