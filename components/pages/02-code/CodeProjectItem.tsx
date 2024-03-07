'use client';
import Title from '@/components/shared/Title';
import { CodeProject } from '@/lib/types';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface CodeProjectItemProps {
  codeProject: CodeProject;
}

const CodeProjectItem: FC<CodeProjectItemProps> = ({ codeProject }) => {
  const { title, caption, cover, hasDarkBackground, slug } = codeProject;
  return (
    <motion.div whileTap={{ scale: 0.97 }}>
      <Link href={`/code/${slug}`}>
        <div className="relative aspect-[9/8] w-full overflow-hidden rounded-xl pl-5 pt-6 md:rounded-2xl md:pl-6 md:pt-8">
          <Image src={cover.url} alt={title} fill sizes="600px" />

          <div className="relative z-10">
            <Title
              as="h2"
              className={cn(
                'text-3xl md:text-4xl',
                hasDarkBackground && 'text-white'
              )}
            >
              {title}
            </Title>
            <h2
              className={cn(
                'text-sm text-gray-500',
                hasDarkBackground && 'text-white/80'
              )}
            >
              {caption}
            </h2>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CodeProjectItem;
