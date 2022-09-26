import React from 'react';
import NextLink from 'next/link';
import { twMerge } from 'tailwind-merge';

type LinkProps = React.ComponentProps<'a'> & {
  variant?: 'link' | 'text';
  href: string;
  isExternal?: boolean;
};

const variantColors = {
  link: 'text-blue-500 dark:text-blue-300',
  text: 'text-current',
};

export const Link = ({
  className,
  href,
  variant = 'link',
  ...props
}: LinkProps) => {
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
        'font-semibold no-underline hover:underline',
        variantColors[variant],
        className
      )}
      href={href}
      {...externalProps}
      {...props}
    />
  );

  return isExternal ? anchor : <NextLink href={href}>{anchor}</NextLink>;
};
