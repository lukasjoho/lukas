import CloudImage from '@/components/CloudinaryImage';
import Container from '@/components/Container';
import InterceptionModal from '@/components/InterceptionModal';
import MasonryLayout from '@/components/Masonry';
import ModalHeadline from '@/components/ModalHeadline';
import ModalImages from '@/components/ModalImages';
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

const GalleryModal = async ({ params }: { params: { slug: string } }) => {
  const res = await getAlbum(params.slug);
  const album = res.data.galleryCollection.items[0];

  const breakpoints = {
    default: 2,
    [BREAKPOINTS.MD]: 1,
  };

  return (
    <InterceptionModal>
      <Container variant="normal">
        <div className="pb-8 text-white w-full">
          <ModalHeadline>{album.title}</ModalHeadline>
        </div>
        <ModalImages>
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
        </ModalImages>
      </Container>
    </InterceptionModal>
  );
};

export default GalleryModal;
