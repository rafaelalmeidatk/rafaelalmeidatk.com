type LinkProps = {
  href: string;
};

const Link = ({ href, ...props }: LinkProps) => {
  const isExternal = href.includes('//');
  const externalProps = isExternal
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  // we can use a regular "a" tag here instead of next/link since we don't use runtime JS
  return <a href={href} {...externalProps} {...props} />;
};

export default Link;
