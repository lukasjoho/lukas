'use client';

import { Icons } from '@/components/shared/Icons';
import { cn } from '@/lib/utils';
import { PenLine } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface TabsProps {
  children: React.ReactNode | React.ReactNode[];
}

export const Tabs = ({ children }: TabsProps) => {
  return <div className="flex gap-4">{children}</div>;
};

interface TabProps {
  children: React.ReactNode;
  id: string;
}
export const Tab = ({ children, id }: TabProps) => {
  const pathname = usePathname();
  const segment = pathname.split('/')[2];
  const isActive = segment == id;
  return (
    <Link href={`/blog/${id}`}>
      <button
        className={cn(
          'flex items-center gap-1.5 text-muted transition duration-150 hover:text-dark',
          isActive && 'font-medium text-dark'
        )}
      >
        {id == 'articles' && <PenLine className="w-5" />}
        {id == 'youtube' && (
          <Icons.youtuberaw
            className={cn('w-5 fill-muted', isActive && 'fill-dark')}
          />
        )}
        {children}
      </button>
    </Link>
  );
};
