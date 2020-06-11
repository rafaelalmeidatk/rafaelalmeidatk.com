import React from 'react';

type VisuallyHiddenProps = React.HTMLProps<HTMLDivElement> & {
  children: React.ReactNode;
};

const VisuallyHidden = ({ children, ...props }: VisuallyHiddenProps) => {
  return (
    <div {...props}>
      {children}
      <style jsx>{`
        position: absolute !important;
        height: 1px;
        width: 1px;
        overflow: hidden;
        clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
        clip: rect(1px, 1px, 1px, 1px);
        white-space: nowrap; /* added line */
      `}</style>
    </div>
  );
};

export default VisuallyHidden;
