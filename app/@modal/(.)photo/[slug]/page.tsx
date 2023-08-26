import InterceptionModal from '@/components/modal/InterceptionModal';
import MasonryLayout from '@/components/pages/03-photo/Masonry';
import OptimizedImage from '@/components/shared/OptimizedImage';
import Title from '@/components/shared/Title';
import { getPhotoProject, getPhotoProjects } from '@/lib/clients/contentful';
import { BREAKPOINTS } from '@/lib/constants';
import { ContentfulImage, PhotoProject } from '@/lib/types';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const photoProjects = await getPhotoProjects();
  return photoProjects.map((photoProject: PhotoProject) => ({
    slug: photoProject.slug,
  }));
}

const GalleryModal = async ({ params }: { params: { slug: string } }) => {
  const photoProject = await getPhotoProject(params.slug);
  if (!photoProject) {
    notFound();
  }

  const { title, cover, imagesCollection } = photoProject;

  return (
    <InterceptionModal isCenter={false} title={title}>
      <div>
        <div className="hidden md:block pb-4 md:pb-8 text-white w-full pointer-events-none">
          <Title className="text-3xl md:text-5xl">{title}</Title>
        </div>
        <div className="bg-white overflow-hidden w-full md:rounded-xl pointer-events-auto">
          <MasonryLayout breakpoints={photoModalMasonryBreakpoints}>
            <div>
              <OptimizedImage
                src={cover.url}
                steps={[400, 500, 600, 800, 1000]}
              />
            </div>

            {imagesCollection.items.map(
              (image: ContentfulImage, idx: number) => (
                <div key={idx}>
                  <OptimizedImage src={image.url} steps={[400, 500, 600]} />
                </div>
              )
            )}
          </MasonryLayout>
        </div>
      </div>
    </InterceptionModal>
  );
};

export default GalleryModal;

const photoModalMasonryBreakpoints = {
  default: 2,
  [BREAKPOINTS.MD]: 1,
};
