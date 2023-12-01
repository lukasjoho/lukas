import { cn } from '@/lib/utils';
import React, { FC } from 'react';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  auto?: boolean;
  variant?: 'small' | 'medium' | 'normal' | 'large' | 'fluid';
}

const Container: FC<ContainerProps> = ({
  variant = 'normal',
  auto = false,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        'mx-auto flex w-full max-w-[2200px] flex-col px-4 md:px-4',

        variant === 'small' && 'max-w-[720px]',
        variant === 'medium' && 'max-w-[900px]',
        variant === 'normal' && 'max-w-[1200px]',
        variant === 'large' && 'max-w-[1400px]',
        variant === 'fluid' && '',
        props.className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
