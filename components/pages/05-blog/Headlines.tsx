'use client';
import slugify from '@/lib/helpers';
import Link from 'next/link';
import React from 'react';

type Node = {
  nodeType: string;
  data: {};
  content: any[];
};

type Content = {
  json: {
    content: Node[];
  };
};

type Headline = {
  label: string;
  id: string;
};

interface HeadlinesProps {
  content: Content;
}

const Headlines = ({ content }: HeadlinesProps) => {
  const headlines = collectHeadlines(content);
  return (
    <ul className="space-y-2">
      {headlines.map((h: Headline, idx: number) => (
        <li key={idx}>
          <Link href={`#${h.id}`} replace onClick={handleScroll}>
            <span className="text-muted underline">{h.label}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Headlines;

function collectHeadlines(content: Content): Headline[] {
  return content.json.content
    .filter((item: Node) => item.nodeType == 'heading-2')
    .map((item: Node) => {
      return {
        label: item.content[0].value,
        id: slugify(item.content[0].value),
      };
    });
}

const scrollIntoViewWithOffset = (targetId: string, offset: number) => {
  const elem = document.getElementById(targetId);
  window.scrollTo({
    behavior: 'smooth',
    top:
      elem?.getBoundingClientRect().top! -
      document.body.getBoundingClientRect().top -
      offset,
  });
};

const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  e.preventDefault();
  const href = e.currentTarget.href;
  const targetId = href.replace(/.*#/, '');
  scrollIntoViewWithOffset(targetId, 60);
};
