import React from 'react';
import NextLink from 'next/link';
import clsx from 'clsx';

type LinkProps = React.ComponentProps<'a'> & {
  href: string;
  isExternal?: boolean;
};

export const Link = ({
  isExternal = false,
  className,
  href,
  ...props
}: LinkProps) => {
  const externalProps: Partial<LinkProps> = isExternal
    ? {
        target: '_blank',
        rel: 'noopener',
      }
    : {};

  const anchor = (
    <a
      className={clsx('font-semibold text-blue-300 hover:underline', className)}
      href={href}
      {...externalProps}
      {...props}
    />
  );

  return isExternal ? anchor : <NextLink href={href}>{anchor}</NextLink>;
};
