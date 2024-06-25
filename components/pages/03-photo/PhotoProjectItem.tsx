import ItemOverlay from '@/components/shared/ItemOverlay';
import OptimizedImage from '@/components/shared/OptimizedImage';
import { PhotoProject } from '@/lib/types';
import Link from 'next/link';
import { FC } from 'react';

interface PhotoProjectItemProps {
  photoProject: PhotoProject;
}

const PhotoProjectItem: FC<PhotoProjectItemProps> = ({ photoProject }) => {
  const { slug, title, caption, cover } = photoProject;
  return (
    <div>
      <Link href={`/photo/${slug}`} scroll={false}>
        <div className="relative">
          <OptimizedImage src={cover.url} steps={[200, 350]} />
          <ItemOverlay title={title} caption={caption} />
        </div>
      </Link>
    </div>
  );
};

export default PhotoProjectItem;
