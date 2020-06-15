import React from 'react';
import cx from 'classnames';
import styles from './VisuallyHidden.module.css';

type VisuallyHiddenProps = React.HTMLProps<HTMLDivElement> & {
  children: React.ReactNode;
};

const VisuallyHidden = ({
  children,
  className,
  ...props
}: VisuallyHiddenProps) => (
  <div className={cx(styles.wrapper, className)} {...props}>
    {children}
  </div>
);

export default VisuallyHidden;
