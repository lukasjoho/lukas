import CloudImage from '@/components/CloudinaryImage';
import Container from '@/components/Container';
import MasonryLayout from '@/components/Masonry';
import PageHeader from '@/components/PageHeader';
import { getAlbums } from '@/lib/contentful';
import Link from 'next/link';

export const revalidate = 0;

const PhotosPage = async () => {
  const albums = await getAlbums();
  return (
    <div>
      <PageHeader
        title="With every camera click, I strive to explore souls, embed them into their environment and tell a story."
        backlink={{ href: '/', label: 'Back to home' }}
      />
      <Container variant="fluid">
        <MasonryLayout>
          {albums.data.galleryCollection.items.map((item: any, idx: number) => (
            <div key={idx}>
              <Link href={`/photo/${item.slug}`}>
                <CloudImage src={item.cover.url} steps={[400, 500, 600]} />
              </Link>
            </div>
          ))}
        </MasonryLayout>
      </Container>
    </div>
  );
};

export default PhotosPage;
