'use client';
import Title from '@/components/shared/Title';
import { CodeProject } from '@/lib/types';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Image, { ImageProps } from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface CodeProjectItemProps {
  codeProject: CodeProject;
}

const CodeProjectItem: FC<CodeProjectItemProps> = ({ codeProject }) => {
  const { title, caption, cover, hasDarkBackground, slug, visible } =
    codeProject;
  return (
    <motion.div whileTap={{ scale: 0.97 }}>
      <Link href={`/code/${slug}`}>
        <div className="relative aspect-[9/8] w-full overflow-hidden rounded-xl pl-5 pt-6 md:rounded-2xl md:pl-6 md:pt-8">
          <Image src={cover.url} alt={title} fill sizes="600px" />

          <div className="relative z-10">
            <pre>{JSON.stringify(visible, null, 2)}</pre>
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

interface CodeProjectImageProps extends ImageProps {
  title: string;
  cover: CodeProject['cover'];
  slug: string;
}

const CodeProjectImage = ({
  cover,
  title,
  slug,
  className,
  alt,
  key,
  src,
  ...props
}: CodeProjectImageProps) => {
  const { url, height, width } = cover;
  return (
    <Image
      className={className}
      key={`project-image-${slug}`}
      src={url}
      height={height}
      width={width}
      sizes="600px"
      alt={`project-image-${title}`}
      {...props}
    />
  );
};
