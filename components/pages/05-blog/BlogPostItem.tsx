import { formatDate } from '@/lib/helpers';
import { BlogPost } from '@/lib/types';
import Link from 'next/link';
import { FC } from 'react';

interface BlogPostItemProps {
  blogPost: BlogPost;
  rotation: number;
}

const BlogPostItem: FC<BlogPostItemProps> = ({ blogPost, rotation }) => {
  const { title, slug, date } = blogPost;
  return (
    <Link href={`/blog/articles/${slug}`}>
      <div
        className=" relative grid items-center overflow-hidden bg-[#F3F3F3] px-12 py-12 text-center"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <div className="absolute left-0 top-0 w-full space-y-7">
          <div>
            <div className="flex w-full justify-end px-2 py-1">
              <span className="mr-1 text-xs text-[#999999]">Date</span>
              <span className="font-fingerpaint text-xs">
                {formatDate(date)}
              </span>
            </div>
            <Line />
          </div>
          <Line />
          <Line />
          <Line />
          <Line />
          <Line />
        </div>
        <h2 className="relative z-10 font-fingerpaint">{title}</h2>
      </div>
    </Link>
  );
};

export default BlogPostItem;

const Line = () => <div className="h-[1px] w-full bg-[#C7CBD6] blur-[1px]" />;
