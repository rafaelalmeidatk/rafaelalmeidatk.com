import React from 'react';
import NextLink from 'next/link';
import { twMerge } from 'tailwind-merge';

type LinkProps = React.ComponentProps<'a'> & {
  href: string;
  isExternal?: boolean;
};

export const Link = ({ className, href, ...props }: LinkProps) => {
  const isExternal = href.includes('//');
  const externalProps: Partial<LinkProps> = isExternal
    ? {
        target: '_blank',
        rel: 'noopener',
      }
    : {};

  const anchor = (
    <a
      className={twMerge(
        'font-semibold text-blue-300 hover:underline',
        className
      )}
      href={href}
      {...externalProps}
      {...props}
    />
  );

  return isExternal ? anchor : <NextLink href={href}>{anchor}</NextLink>;
};
