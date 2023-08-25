import OptimizedImage from '@/components/shared/OptimizedImage';
import Title from '@/components/shared/Title';
import { CodeProject } from '@/lib/types';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { FC } from 'react';

interface CodeProjectItemProps {
  codeProject: CodeProject;
}

const CodeProjectItem: FC<CodeProjectItemProps> = ({ codeProject }) => {
  const { title, caption, cover, hasDarkBackground, slug } = codeProject;
  return (
    <Link href={`/code/${slug}`}>
      <div className="relative aspect-[9/8] w-full pt-6 md:pt-8 pl-5 md:pl-6 rounded-xl overflow-hidden">
        <div className="w-full h-full absolute left-0 top-0">
          <OptimizedImage src={cover.url} steps={[400, 500, 600, 700, 800]} />
        </div>

        <div className="relative z-10 font-meche">
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
  );
};

export default CodeProjectItem;
