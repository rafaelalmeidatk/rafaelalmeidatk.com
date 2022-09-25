import React from 'react';
import clsx from 'clsx';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import vsDark from 'prism-react-renderer/themes/vsDark';
import styles from './CodeBlock.module.css';

const numbersExtractRegex = /{([\d,-]+)}/;

const getLinesToHighlightFunc = (str: string) => {
  if (!numbersExtractRegex.test(str)) return () => false;

  const [, numbers] = numbersExtractRegex.exec(str) ?? [];

  const lineNumbers = numbers // "1,3-5"
    .split(',') // ["1", "3-5"]
    .map(
      (numberOrRange) =>
        numberOrRange
          .split('-') // [["1"], ["3", "5"]]
          .map((x) => parseInt(x, 10)) // [[1], [3, 5]]
    );

  return (lineNumber: number) => {
    const inRange = lineNumbers.some(([start, end]) =>
      end ? lineNumber >= start && lineNumber <= end : lineNumber === start
    );

    return inRange;
  };
};

type CodeBlockProps = {
  className: string;
  metastring: string;
  children: string;
};

const CodeBlock = ({ children, className, metastring }: CodeBlockProps) => {
  const language = className?.replace(/language-/, '') as Language;
  const shouldHighlight = getLinesToHighlightFunc(metastring);

  let code = children;
  if (code[code.length - 1] === '\n') {
    code = children.substr(0, children.length - 1); // remove the new line at the end
  }

  return (
    <Highlight {...defaultProps} code={code} language={language} theme={vsDark}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
          style={{ ...style, overflowX: 'auto', padding: '20px' }}
        >
          {tokens.map((line, i) => {
            const lineProps = getLineProps({ line, key: i });

            if (shouldHighlight(i + 1)) {
              lineProps.className = clsx(
                lineProps.className,
                styles.highlightLine
              );
            }

            return (
              <div key={i} {...lineProps}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            );
          })}
        </pre>
      )}
    </Highlight>
  );
};

export default CodeBlock;
