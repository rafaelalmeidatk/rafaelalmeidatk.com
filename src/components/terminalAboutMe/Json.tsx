import { LabelledByProvider } from '../LabelledByContext';
import TerminalWord from './TerminalWord';
import styles from './Json.module.css';

type JsonKeyProps = {
  text: string;
};

export const JsonKey = ({ text }: JsonKeyProps) => {
  return <TerminalWord>"{text}": </TerminalWord>;
};

type JsonStringValueProps = {
  href?: string;
  hasComma?: boolean;
  children: string | string[];
};

export const JsonStringValue = ({
  children,
  href,
  hasComma = true,
}: JsonStringValueProps) => (
  <>
    <TerminalWord>"</TerminalWord>
    <TerminalWord href={href}>{children}</TerminalWord>
    <TerminalWord>"</TerminalWord>
    {hasComma && <TerminalWord>,</TerminalWord>}
  </>
);

type JsonLinkValueProps = {
  href: string;
  hasComma?: boolean;
  children: string | string[];
};

export const JsonLinkValue = ({
  href,
  hasComma,
  children,
}: JsonLinkValueProps) => (
  <JsonStringValue href={href} hasComma={hasComma}>
    {children}
  </JsonStringValue>
);

type JsonLineProps = {
  hasIndentation?: boolean;
  labelledBy?: string;
  children: React.ReactNode;
};

export const JsonLine = ({
  hasIndentation = true,
  labelledBy = '',
  children,
}: JsonLineProps) => {
  const ariaProp = labelledBy
    ? { 'aria-labelledby': labelledBy }
    : { 'aria-hidden': true };

  return (
    <LabelledByProvider labelledBy={labelledBy}>
      <div
        className={hasIndentation ? styles.indentation : undefined}
        {...ariaProp}
      >
        {children}
      </div>
    </LabelledByProvider>
  );
};
