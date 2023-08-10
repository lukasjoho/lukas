import { BlogPost } from '@/lib/types';
import Link from 'next/link';
import React, { FC } from 'react';

interface BlogPostItemProps {
  blogpost: BlogPost;
  rotation: number;
}

const BlogPostItem: FC<BlogPostItemProps> = ({ blogpost, rotation }) => {
  const { title, slug } = blogpost;
  return (
    <Link href={`/blog/${slug}`}>
      <div
        className=" bg-[#F3F3F3] px-12 text-center py-12 relative overflow-hidden grid items-center"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <div className="space-y-7 absolute left-0 top-0 w-full">
          <div>
            <div className="w-full flex justify-end px-2 py-1">
              <span className="text-[#999999] text-xs mr-1">Date</span>
              <span className="font-fingerpaint text-xs">09/23</span>
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
