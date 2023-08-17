'use client';
import { FC } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

interface CodeHighlighterProps {
  children: string | string[];
}

const CodeHighlighter: FC<CodeHighlighterProps> = ({ children }) => {
  return <SyntaxHighlighter language="jsx">{children}</SyntaxHighlighter>;
};

export default CodeHighlighter;
