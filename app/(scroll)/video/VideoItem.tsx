import CloudImage from '@/components/CloudinaryImage';
import { Video } from '@/lib/types';
import Link from 'next/link';
import { FC } from 'react';

interface VideoItemProps {
  video: Video;
}

const VideoItem: FC<VideoItemProps> = ({ video }) => {
  const { title, cover, file, slug } = video;
  return (
    <Link
      href={`/video/${slug}`}
      className="aspect-[16/9] relative group cursor-pointer"
    >
      <CloudImage src={cover.url} steps={[400, 500, 600]} />
      <div className="hidden md:flex opacity-0 transition duration-300 group-hover:opacity-100 absolute left-0 top-0 w-full h-full bg-dark/80 items-center justify-center text-white">
        <h2 className="font-meche text-center text-3xl">{title}</h2>
      </div>
      <div className="md:hidden absolute left-0 bottom-0 text-white pl-4 pb-3">
        <h2 className="font-meche text-3xl">{title}</h2>
      </div>
    </Link>
  );
};

export default VideoItem;
