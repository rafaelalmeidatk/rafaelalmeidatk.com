import cx from 'classnames';
import { useGlobalDelay } from './GlobalDelayContext';
import styles from './Footer.module.css';

type FooterProps = {
  showAnimation?: boolean;
};

const FOOTER_OPEN_ANIMATION = 300;

const Footer = ({ showAnimation = false }: FooterProps) => {
  let globalCssDelay = '0ms';

  if (showAnimation) {
    const { getCurrentCssDelay, registerAnimation } = useGlobalDelay();
    globalCssDelay = getCurrentCssDelay();
    registerAnimation(FOOTER_OPEN_ANIMATION);
  }

  return (
    <footer
      className={cx(styles.footer, { [styles.animated]: showAnimation })}
      style={{
        animationDuration: `${FOOTER_OPEN_ANIMATION}ms`,
        animationDelay: globalCssDelay,
      }}
    >
      <p>
        Built with{' '}
        <a
          href="https://github.com/zeit/next.js"
          target="_blank"
          rel="noopener noreferrer"
        >
          Next.js
        </a>{' '}
        🚀
      </p>

      <p>Fun fact: this page doesn't have any JS bundle</p>
      <p>
        <a
          href="https://github.com/rafaelalmeidatk/rafaelalmeidatk.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          source code
        </a>
      </p>
    </footer>
  );
};

export default Footer;
