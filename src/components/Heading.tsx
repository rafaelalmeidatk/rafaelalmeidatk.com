import React from 'react';

type HeadingProps = React.ComponentProps<'h1'> & {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

export const Heading = ({ as: Tag = 'h2', ...props }: HeadingProps) => {
  return <Tag className="text-4xl font-semibold" {...props} />;
};
