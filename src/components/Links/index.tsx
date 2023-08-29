import clsx from 'clsx';
import type { LinkProps } from 'next/link';
import Link from 'next/link';
import type { FC, ReactNode } from 'react';

export interface PrimaryLinkProps extends LinkProps {
  children: ReactNode;
  className?: string;
}

export const LinkPrimary: FC<PrimaryLinkProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Link
      className={clsx(
        'flex h-[2.875rem] w-[11rem] items-center justify-center rounded-btn-3xl bg-secondary font-jost text-2xl font-medium uppercase text-black shadow-xl-btn lg:h-[3.75rem] lg:w-[14.5rem]',
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
};
