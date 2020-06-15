import React from 'react';
import { useGlobalDelay } from './GlobalDelayContext';
import { LabelledByProvider, useLabelledBy } from './LabelledByContext';
import VisuallyHidden from './VisuallyHidden';

const INPUT_MS_PER_LETTER = 20;
const CONTENT_MS_PER_LETTER = 5;

type TerminalLineProps = {
  children: string | string[];
  href?: string;
  delay?: number;
};

const TerminalLetter = ({ children, delay = CONTENT_MS_PER_LETTER }: any) => {
  const { getCurrentCssDelay, registerAnimation } = useGlobalDelay();
  const labelledBy = useLabelledBy();

  const globalCssDelay = getCurrentCssDelay();
  registerAnimation(delay);

  return (
    <span
      className={`terminal-letter`}
      style={{ animationDelay: globalCssDelay }}
      aria-labelledby={labelledBy}
    >
      {children}
    </span>
  );
};

const TerminalLine = ({ children, href, delay }: TerminalLineProps) => {
  const labelledBy = useLabelledBy();

  const foo = Array.isArray(children) ? children.join('') : children;
  const letters = foo.split('');

  const elements = letters.map((letter, i) => {
    return (
      <TerminalLetter key={i} delay={delay}>
        {letter}
      </TerminalLetter>
    );
  });

  if (href) {
    return (
      <a
        href={href}
        rel="noopener noreferrer"
        target="_blank"
        aria-labelledby={labelledBy}
      >
        {elements}
      </a>
    );
  }

  return <span aria-labelledby={labelledBy}>{elements}</span>;
};

const JsonKey = (props: any) => {
  return <TerminalLine>"{props.text}": </TerminalLine>;
};

const JsonValue = ({
  value,
  isString = false,
  isLink,
  hasComma = true,
}: any) => {
  const value_ = (isString ? `"${value}"` : value) + (hasComma ? ',' : '');
  return <TerminalLine href={isLink && value}>{value_}</TerminalLine>;
};

type JsonStringValueProps = {
  href?: string;
  hasComma?: boolean;
  children: string | string[];
};

const JsonStringValue = ({
  children,
  href,
  hasComma = true,
}: JsonStringValueProps) => (
  <>
    <TerminalLine>"</TerminalLine>
    <TerminalLine href={href}>{children}</TerminalLine>
    <TerminalLine>"</TerminalLine>
    {hasComma && <TerminalLine>,</TerminalLine>}
  </>
);

type JsonLinkValueProps = {
  href: string;
  children: string | string[];
};

const JsonLinkValue = ({ href, children }: JsonLinkValueProps) => (
  <JsonStringValue href={href}>{children}</JsonStringValue>
);

type JsonLineProps = {
  hasIndentation?: boolean;
  labelledBy?: string;
  children: React.ReactNode;
};

const JsonLine = ({
  hasIndentation = true,
  labelledBy = '',
  children,
}: JsonLineProps) => {
  const ariaProp = labelledBy
    ? { 'aria-labelledby': labelledBy }
    : { 'aria-hidden': true };

  return (
    <LabelledByProvider labelledBy={labelledBy}>
      <div className={hasIndentation ? 'indentation' : undefined} {...ariaProp}>
        {children}
      </div>
    </LabelledByProvider>
  );
};

const Json = () => {
  return (
    <div>
      <JsonLine hasIndentation={false}>
        <TerminalLine>{'{'}</TerminalLine>
      </JsonLine>

      <JsonLine labelledBy="github-desc">
        <VisuallyHidden id="github-desc">
          Github username: rafaelalmeidatk
        </VisuallyHidden>

        <JsonKey text="github" />
        <JsonLinkValue href="https://github.com/rafaelalmeidatk">
          github.com/rafaelalmeidatk
        </JsonLinkValue>
      </JsonLine>

      <JsonLine labelledBy="work-desc">
        <VisuallyHidden id="work-desc">
          Currently working as a Software Developer at D3
        </VisuallyHidden>

        <JsonKey text="work" />
        <TerminalLine>{'"Software Developer @ '}</TerminalLine>
        <TerminalLine href="https://d3.do">{'D3'}</TerminalLine>
        <TerminalLine>{'",'}</TerminalLine>
      </JsonLine>

      <JsonLine labelledBy="blog-desc">
        <VisuallyHidden id="blog-desc">Blog not available yet</VisuallyHidden>

        <JsonKey text="blog" />
        <JsonValue value="null" hasComma={false} />
      </JsonLine>

      <JsonLine hasIndentation={false}>
        <TerminalLine>{'}'}</TerminalLine>
      </JsonLine>
    </div>
  );
};

const TERMINAL_OPEN_DURATION = 150;

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
    <section className="about-me">
      <div className="box container">
        <div className="input" aria-hidden>
          <span className="domain">rafael@pc</span>:~${' '}
          <TerminalLine delay={INPUT_MS_PER_LETTER}>{inputText}</TerminalLine>
          <span
            className="square"
            style={{ animationDelay: `${hideCursorDelay}ms` }}
          />
        </div>

        <div className="json">
          <Json />
        </div>
      </div>

      <style jsx global>{`
        .about-me {
          padding: 5.5rem 2rem;
        }

        .box {
          background: rgba(0, 0, 0, 0.1);
          border: 2px solid rgba(255, 255, 255, 0.02);
          padding: 14px 28px;
          position: relative;
          overflow: hidden;
          opacity: 0%;
          animation: box-open ${TERMINAL_OPEN_DURATION}ms steps(1, end)
            ${globalCssDelay} forwards;
        }

        @media (max-width: 768px) {
          .about-me {
            padding: 2rem 0;
          }

          .box {
            border-left: 0;
            border-right: 0;
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }

        .input {
          margin-bottom: 0.2rem;
          pointer-events: none;
        }

        .domain {
          font-weight: 700;
        }

        .square {
          display: inline-block;
          margin-left: 0.25rem;
          margin-bottom: -0.1rem;
          width: 9px;
          height: 15px;
          background: #fff;
          animation: hide 0.1s steps(1, end) forwards;
        }

        .input,
        .json {
          white-space: pre-wrap;
          font-family: monospace;
          position: relative;
        }

        .json a {
          text-decoration: none;
          border-bottom: 2px solid #fff;
        }

        .indentation {
          margin-left: 1.5rem;
        }

        .terminal-letter {
          will-change: opacity, width;
          display: inline-block;
          color: white;
          width: 0;
          opacity: 0;
          animation: show 0.45s steps(1, end) forwards;
        }

        @keyframes show {
          0% {
            opacity: 0;
            width: 0;
          }
          10%,
          100% {
            opacity: 1;
            width: auto;
          }
        }

        @keyframes hide {
          0% {
            opacity: 100%;
          }
          100% {
            opacity: 0%;
          }
        }

        @keyframes box-open {
          0% {
            opacity: 0%;
            background: #fff;
          }

          30% {
            opacity: 100%;
            background: #fff;
          }

          100% {
            opacity: 100%;
            background: rgba(0, 0, 0, 0.1);
          }
        }
      `}</style>
    </section>
  );
};

export default TerminalAboutMe;
