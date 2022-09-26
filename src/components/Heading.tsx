import React from 'react';
import { twMerge } from 'tailwind-merge';

type HeadingProps = React.ComponentProps<'h1'> & {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

export const Heading = ({
  as: Tag = 'h2',
  className,
  ...props
}: HeadingProps) => {
  return (
    <Tag
      className={twMerge(
        'text-4xl text-gray-900 dark:text-gray-100  font-semibold',
        className
      )}
      {...props}
    />
  );
};
