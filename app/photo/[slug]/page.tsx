import Container from '@/components/layout/Container';
import PageLayout from '@/components/layout/PageLayout';
import MasonryLayout from '@/components/pages/03-photo/Masonry';
import { default as OptimizedImage } from '@/components/shared/OptimizedImage';
import { getPhotoProject, getPhotoProjects } from '@/lib/clients/contentful';
import { BREAKPOINTS } from '@/lib/constants';
import { createMetaDataObject } from '@/lib/helpers';
import { Params } from '@/lib/types';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata | undefined> {
  const photoProject = await getPhotoProject(params.slug);
  if (!photoProject) {
    return;
  }

  const { title, caption, slug, cover } = photoProject;

  return createMetaDataObject(
    { title, slug, imageUrl: cover.url, description: caption },
    { path: '/photo', type: 'article', gravity: 'g_face' }
  );
}

const breakpoints = {
  default: 2,
  [BREAKPOINTS.MD]: 1,
};

export async function generateStaticParams() {
  const photoProjects = await getPhotoProjects();
  return photoProjects.map((photoProject: any) => ({
    slug: photoProject.slug,
  }));
}

const PhotoProjectPage = async ({ params }: { params: { slug: string } }) => {
  const photoProject = await getPhotoProject(params.slug);
  if (!photoProject) {
    notFound();
  }

  const { title, cover, imagesCollection } = photoProject;
  return (
    <PageLayout
      title={title}
      backlink={{ href: '/photo', label: 'Back to all' }}
    >
      <Container variant="normal">
        <MasonryLayout breakpoints={breakpoints}>
          <div>
            <OptimizedImage
              src={cover.url}
              steps={[400, 500, 600, 800, 1000]}
            />
          </div>

          {imagesCollection.items.map((image: any, idx: number) => (
            <div key={idx}>
              <OptimizedImage src={image.url} steps={[400, 500, 600]} />
            </div>
          ))}
        </MasonryLayout>
      </Container>
    </PageLayout>
  );
};

export default PhotoProjectPage;
