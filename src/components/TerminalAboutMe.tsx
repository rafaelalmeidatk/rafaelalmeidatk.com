import React from 'react';
import { useGlobalDelay } from './GlobalDelayContext';

const MS_PER_LETTER = 8;

type TerminalLineProps = {
  children: string | string[];
  href?: string;
  delay?: number;
};

const TerminalLetter = ({ children, delay = MS_PER_LETTER }: any) => {
  const { getCurrentCssDelay, registerAnimation } = useGlobalDelay();

  const globalCssDelay = getCurrentCssDelay();
  registerAnimation(delay);

  return (
    <span
      className={`terminal-letter`}
      style={{ animationDelay: globalCssDelay }}
    >
      {children}
    </span>
  );
};

const TerminalLine = ({ children, href, delay }: TerminalLineProps) => {
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
      <a href={href} rel="noopener noreferrer" target="_blank">
        {elements}
      </a>
    );
  }

  return <span>{elements}</span>;
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

const JsonStringValue = ({ children, href, hasComma = true }: any) => {
  const value = `"${children}"` + (hasComma ? ',' : '');
  return <TerminalLine href={href}>{value}</TerminalLine>;
};

const JsonLinkValue = ({ href, children }: any) => (
  <JsonStringValue href={href || children}>{children}</JsonStringValue>
);

const JsonLine = ({ hasIndentation = true, children }: any) => {
  return <div className={hasIndentation && 'indentation'}>{children}</div>;
};

const Json = () => {
  return (
    <div>
      <JsonLine hasIndentation={false}>
        <TerminalLine>{'{'}</TerminalLine>
      </JsonLine>

      <JsonLine>
        <JsonKey text="github" />
        <JsonLinkValue href="https://github.com/rafaelalmeidatk">
          github.com/rafaelalmeidatk
        </JsonLinkValue>
      </JsonLine>

      <JsonLine>
        <JsonKey text="work" />
        <TerminalLine>{'"Software Developer @ '}</TerminalLine>
        <TerminalLine href="https://d3.do">{'D3'}</TerminalLine>
        <TerminalLine>{'",'}</TerminalLine>
      </JsonLine>

      <JsonLine>
        <JsonKey text="blog" />
        <JsonValue value="null" />
      </JsonLine>

      <JsonLine>
        <JsonKey text="mainLangs" />
        <JsonValue value={'["js", "ts", "csharp"]'} />
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

  const inputText = `cat data.json`;
  const inputTextDelay = 30;
  const hideCursorDelay = inputText.length * MS_PER_LETTER + 450;

  return (
    <section className="about-me container">
      <div className="box">
        <div className="input">
          <span className="domain">rafael@pc</span>:~${' '}
          <TerminalLine delay={inputTextDelay}>{inputText}</TerminalLine>
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
          padding: 2rem;
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

        .input {
          margin-bottom: 0.2rem;
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
