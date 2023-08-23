import ItemOverlay from '@/components/shared/ItemOverlay';
import OptimizedImage from '@/components/shared/OptimizedImage';
import { getAlbums } from '@/lib/contentful';
import Link from 'next/link';
import MasonryLayout from './Masonry';

const PhotoMasonry = async () => {
  const albums = await getAlbums();

  return (
    <MasonryLayout>
      {albums.data.galleryCollection.items.map((item: any, idx: number) => (
        <div key={idx}>
          <Link href={`/photo/${item.slug}`}>
            <div className="relative">
              <OptimizedImage
                src={item.cover.url}
                steps={[200, 300, 400, 500]}
              />
              <ItemOverlay title={item.title} />
            </div>
          </Link>
        </div>
      ))}
    </MasonryLayout>
  );
};

export default PhotoMasonry;
