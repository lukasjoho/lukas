import ItemOverlay from '@/components/shared/ItemOverlay';
import OptimizedImage from '@/components/shared/OptimizedImage';
import { VideoProject } from '@/lib/types';
import Link from 'next/link';
import { FC } from 'react';

interface VideoProjectItemProps {
  videoProject: VideoProject;
}

const VideoProjectItem: FC<VideoProjectItemProps> = ({ videoProject }) => {
  const { title, cover, slug } = videoProject;
  return (
    <Link href={`/video/${slug}`}>
      <div className="aspect-[16/9] relative group cursor-pointer w-full overflow-hidden">
        <OptimizedImage src={cover.url} steps={[400, 500, 600]} />
        {/* <div className="hidden md:flex opacity-0 transition duration-300 group-hover:opacity-100 absolute left-0 top-0 w-full h-full bg-dark/80 items-center justify-center text-white">
          <h2 className="font-meche text-center text-3xl">{title}</h2>
        </div>
        <div className="md:hidden absolute left-0 bottom-0 text-white pl-4 pb-3">
          <h2 className="font-meche text-3xl">{title}</h2>
        </div> */}
        <ItemOverlay title={title} />
      </div>
    </Link>
  );
};

export default VideoProjectItem;
