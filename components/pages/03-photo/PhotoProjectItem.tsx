import ItemOverlay from '@/components/shared/ItemOverlay';
import { PhotoProject } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface PhotoProjectItemProps {
  photoProject: PhotoProject;
}

const PhotoProjectItem: FC<PhotoProjectItemProps> = ({ photoProject }) => {
  const { slug, title, caption, cover } = photoProject;
  return (
    <div>
      <Link href={`/photo/${slug}`}>
        <div className="relative">
          {/* <OptimizedImage src={cover.url} steps={[200, 300, 400, 500]} /> */}
          <Image
            src={cover.url}
            alt={title}
            width={cover.width}
            height={cover.height}
            sizes="500px"
          />
          <ItemOverlay title={title} caption={caption} />
        </div>
      </Link>
    </div>
  );
};

export default PhotoProjectItem;
