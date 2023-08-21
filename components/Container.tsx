import { cn } from '@/lib/utils';
import React, { FC } from 'react';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'small' | 'medium' | 'normal' | 'large' | 'fluid' | 'static';
}

const Container: FC<ContainerProps> = ({
  variant = 'normal',
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        'w-full flex flex-col mx-auto px-3 md:px-6 max-w-[2200px]',
        variant === 'small' && 'max-w-[720px]',
        variant === 'medium' && 'max-w-[900px]',
        variant === 'normal' && 'max-w-[1200px]',
        variant === 'large' && 'max-w-[1400px]',
        variant === 'fluid' && 'px-3 md:px-6 max-w-[2200px]',
        variant === 'static' && 'px-3 md:px-6',
        props.className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
