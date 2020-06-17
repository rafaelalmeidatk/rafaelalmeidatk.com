import { useGlobalDelay } from '../GlobalDelayContext';
import { TERMINAL_OPEN_DURATION, INPUT_MS_PER_LETTER } from './constants';
import TerminalWord from './TerminalWord';
import CommandOutput from './CommandOutput';
import styles from './TerminalAboutMe.module.css';

const TerminalAboutMe = () => {
  const { getCurrentCssDelay, registerAnimation } = useGlobalDelay();
  const globalCssDelay = getCurrentCssDelay();
  registerAnimation(TERMINAL_OPEN_DURATION, 200);

  const inputText = `cat info.json && ./render_projects`;
  const hideCursorDelay =
    parseInt(globalCssDelay, 10) +
    TERMINAL_OPEN_DURATION +
    inputText.length * INPUT_MS_PER_LETTER;

  return (
    <section className={styles.wrapper}>
      <div
        className={styles.terminal + ' container'}
        style={{
          animationDuration: `${TERMINAL_OPEN_DURATION}ms`,
          animationDelay: globalCssDelay,
        }}
      >
        <div className={styles.input} aria-hidden>
          <span className={styles.domain}>user@pc</span>:~${' '}
          <TerminalWord delay={INPUT_MS_PER_LETTER}>{inputText}</TerminalWord>
          <span
            className={styles.square}
            style={{ animationDelay: `${hideCursorDelay}ms` }}
          />
        </div>

        <div className={styles.output}>
          <CommandOutput />
        </div>
      </div>
    </section>
  );
};

export default TerminalAboutMe;
