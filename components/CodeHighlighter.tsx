'use client';
import React, { FC } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeHighlighterProps {
  children: string | string[];
}

const CodeHighlighter: FC<CodeHighlighterProps> = ({ children }) => {
  return (
    <SyntaxHighlighter language="javascript" style={dark}>
      {children}
    </SyntaxHighlighter>
  );
};

export default CodeHighlighter;
