import React from 'react';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import vsDark from 'prism-react-renderer/themes/vsDark';

type CodeBlockProps = {
  className: string;
  children: string;
};

const CodeBlock = ({ children, className }: CodeBlockProps) => {
  const language = className?.replace(/language-/, '') as Language;
  let code = children;
  if (code[code.length - 1] === '\n') {
    code = children.substr(0, children.length - 1); // remove the new line at the end
  }

  return (
    <Highlight {...defaultProps} code={code} language={language} theme={vsDark}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: '20px' }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default CodeBlock;
