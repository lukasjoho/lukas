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
        'w-full flex flex-col items-start mx-auto px-4 md:px-8 max-w-[2200px]',
        variant === 'small' && 'max-w-[720px]',
        variant === 'medium' && 'max-w-[900px]',
        variant === 'normal' && 'max-w-[1200px]',
        variant === 'large' && 'max-w-[1400px]',
        variant === 'fluid' && 'px-4 md:px-4 max-w-[2200px]',
        variant === 'static' && 'px-4 md:px-4',
        props.className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
