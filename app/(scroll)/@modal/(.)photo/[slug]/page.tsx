import InterceptionModal from '@/components/InterceptionModal';
import MasonryLayout from '@/components/Masonry';
import OptimizedImage from '@/components/OptimizedImage';
import { BREAKPOINTS } from '@/lib/breakpoints';
import { getAlbum, getAlbums } from '@/lib/contentful';

export async function generateStaticParams() {
  const res = await getAlbums();
  const galleries = res.data.galleryCollection.items;
  return galleries.map((gallery: any) => ({
    slug: gallery.slug,
  }));
}

export const revalidate = 3600;

const GalleryModal = async ({ params }: { params: { slug: string } }) => {
  const res = await getAlbum(params.slug);
  const album = res.data.galleryCollection.items[0];

  const breakpoints = {
    default: 2,
    [BREAKPOINTS.MD]: 1,
  };

  return (
    <InterceptionModal isCenter={false} title={album.title}>
      <div>
        <div className="hidden md:block pb-4 md:pb-8 text-white w-full pointer-events-none">
          <h1 className="font-meche text-3xl md:text-5xl">{album.title}</h1>
        </div>
        <div className="bg-white overflow-hidden w-full md:rounded-xl pointer-events-auto">
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
        </div>
      </div>
    </InterceptionModal>
  );
};

export default GalleryModal;
