import { useLabelledBy } from '../LabelledByContext';
import TerminalLetter from './TerminalLetter';

type TerminalWordProps = {
  children: string | string[];
  href?: string;
  delay?: number;
};

const TerminalWord = ({ children, href, delay }: TerminalWordProps) => {
  const labelledBy = useLabelledBy();

  const childrenStr = Array.isArray(children) ? children.join('') : children;
  const letters = childrenStr.split('');

  const elements = letters.map((letter, i) => {
    return (
      <TerminalLetter key={i} delay={delay}>
        {letter}
      </TerminalLetter>
    );
  });

  if (href) {
    const isExternal = href.includes('//');
    const externalProps = isExternal
      ? { target: '_blank', rel: 'noopener noreferrer' }
      : {};

    return (
      <a href={href} {...externalProps} aria-labelledby={labelledBy}>
        {elements}
      </a>
    );
  }

  return <span aria-labelledby={labelledBy}>{elements}</span>;
};

export default TerminalWord;
