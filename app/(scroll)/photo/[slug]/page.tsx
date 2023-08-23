import Container from '@/components/layout/Container';
import PageLayout from '@/components/layout/PageLayout';
import MasonryLayout from '@/components/pages/03-photo/Masonry';
import { default as OptimizedImage } from '@/components/shared/OptimizedImage';
import { BREAKPOINTS } from '@/lib/breakpoints';
import { getAlbum, getAlbums } from '@/lib/contentful';

export async function generateStaticParams() {
  const res = await getAlbums();
  const galleries = res.data.galleryCollection.items;
  return galleries.map((gallery: any) => ({
    slug: gallery.slug,
  }));
}

const AlbumPage = async ({ params }: { params: { slug: string } }) => {
  const res = await getAlbum(params.slug);
  const album = res.data.galleryCollection.items[0];

  const breakpoints = {
    default: 2,
    [BREAKPOINTS.MD]: 1,
  };

  return (
    <PageLayout
      title={album.title}
      backlink={{ href: '/photo', label: 'Back to all' }}
    >
      <Container variant="normal">
        <MasonryLayout breakpoints={breakpoints}>
          <div>
            <OptimizedImage
              src={album.cover.url}
              steps={[400, 500, 600, 800, 1000]}
            />
          </div>

          {album.imagesCollection.items.map((image: any, idx: number) => (
            <div key={idx}>
              <OptimizedImage src={image.url} steps={[400, 500, 600]} />
            </div>
          ))}
        </MasonryLayout>
      </Container>
    </PageLayout>
  );
};

export default AlbumPage;
