import CloudImage from '@/components/CloudinaryImage';
import Container from '@/components/Container';
import MasonryLayout from '@/components/Masonry';
import PageHeader from '@/components/PageHeader';
import { BREAKPOINTS } from '@/lib/breakpoints';
import { getAlbum, getAlbums } from '@/lib/contentful';

export async function generateStaticParams() {
  const res = await getAlbums();
  const galleries = res.data.galleryCollection.items;
  return galleries.map((gallery: any) => ({
    slug: gallery.slug,
  }));
}

export const revalidate = 0;

const AlbumPage = async ({ params }: { params: { slug: string } }) => {
  const res = await getAlbum(params.slug);
  const album = res.data.galleryCollection.items[0];

  const breakpoints = {
    default: 2,
    [BREAKPOINTS.MD]: 1,
  };

  return (
    <>
      <PageHeader
        title={album.title}
        backlink={{ href: '/photo', label: 'Back to all' }}
      />
      <Container variant="normal">
        <MasonryLayout breakpoints={breakpoints}>
          <div>
            <CloudImage
              src={album.cover.url}
              steps={[400, 500, 600, 800, 1000]}
            />
          </div>

          {album.imagesCollection.items.map((image: any, idx: number) => (
            <div key={idx}>
              <CloudImage src={image.url} steps={[400, 500, 600]} />
            </div>
          ))}
        </MasonryLayout>
      </Container>
    </>
  );
};

export default AlbumPage;
