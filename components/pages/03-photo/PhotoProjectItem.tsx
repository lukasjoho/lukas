import ItemOverlay from '@/components/shared/ItemOverlay';
import OptimizedImage from '@/components/shared/OptimizedImage';
import { PhotoProject } from '@/lib/types';
import Link from 'next/link';
import { FC } from 'react';

interface PhotoProjectItemProps {
  photoProject: PhotoProject;
}

const PhotoProjectItem: FC<PhotoProjectItemProps> = ({ photoProject }) => {
  const { slug, title, cover } = photoProject;
  return (
    <div>
      <Link href={`/photo/${slug}`}>
        <div className="relative">
          <OptimizedImage src={cover.url} steps={[200, 300, 400, 500]} />
          <ItemOverlay title={title} />
        </div>
      </Link>
    </div>
  );
};

export default PhotoProjectItem;
