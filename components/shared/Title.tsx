import { cn } from '@/lib/utils';
import React, { ElementType, FC, HTMLAttributes } from 'react';

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
}

const HeadingTag: FC<{
  as: ElementType<HTMLAttributes<HTMLHeadingElement>>;
  props: HTMLAttributes<HTMLHeadingElement>;
}> = ({ as: Component, props }) => (
  <Component
    {...props}
    className={cn('font-meche text-2xl', props.className)}
  />
);

const Title: FC<TitleProps> = ({ children, as = 'h1', ...props }) => {
  return <HeadingTag as={as} props={{ children, ...props }} />;
};

export default Title;
