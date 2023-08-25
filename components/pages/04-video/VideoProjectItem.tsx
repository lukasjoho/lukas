import ItemOverlay from '@/components/shared/ItemOverlay';
import OptimizedImage from '@/components/shared/OptimizedImage';
import Title from '@/components/shared/Title';
import { VideoProject } from '@/lib/types';
import Link from 'next/link';
import { FC } from 'react';

interface VideoProjectItemProps {
  videoProject: VideoProject;
}

const VideoProjectItem: FC<VideoProjectItemProps> = ({ videoProject }) => {
  const { title, cover, slug, caption } = videoProject;
  return (
    <Link href={`/video/${slug}`}>
      <div className="aspect-[16/9] relative group cursor-pointer w-full overflow-hidden">
        <OptimizedImage src={cover.url} steps={[400, 500, 600]} />
        <ItemOverlay title={title} caption={caption} />
        <div className="md:hidden absolute bottom-3 left-4 z-10 text-white">
          <Title className="text-2xl">{title}</Title>
        </div>
      </div>
    </Link>
  );
};

export default VideoProjectItem;
