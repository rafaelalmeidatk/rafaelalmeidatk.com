import { useGlobalDelay } from '../GlobalDelayContext';
import { useLabelledBy } from '../LabelledByContext';
import { CONTENT_MS_PER_LETTER } from './constants';
import styles from './TerminalLetter.module.css';

type TerminalLetterProps = {
  children: React.ReactNode;
  delay?: number;
};

const TerminalLetter = ({
  children,
  delay = CONTENT_MS_PER_LETTER,
}: TerminalLetterProps) => {
  const { getCurrentCssDelay, registerAnimation } = useGlobalDelay();
  const labelledBy = useLabelledBy();

  const globalCssDelay = getCurrentCssDelay();
  registerAnimation(delay);

  return (
    <span
      className={styles.terminalLetter}
      style={{ animationDelay: globalCssDelay }}
      aria-labelledby={labelledBy}
    >
      {children}
    </span>
  );
};

export default TerminalLetter;
