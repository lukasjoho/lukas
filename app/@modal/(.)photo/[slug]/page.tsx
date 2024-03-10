'use client';
import Gallery from '@/components/pages/03-photo/Gallery';
import { getPhotoProject, getPhotoProjects } from '@/lib/clients/contentful';
import { PhotoProject } from '@/lib/types';
import { notFound } from 'next/navigation';

export const dynamic = 'force-static';

export async function generateStaticParams() {
  const photoProjects = await getPhotoProjects();
  return photoProjects.map((photoProject: PhotoProject) => ({
    slug: photoProject.slug,
  }));
}

const PhotoPage = async ({ params }: { params: { slug: string } }) => {
  const photoProject = await getPhotoProject(params.slug);

  if (!photoProject) {
    notFound();
  }

  const { title, cover, imagesCollection } = photoProject;

  return (
    <Gallery
      id={photoProject.sys.id}
      title={title}
      cover={cover}
      photos={imagesCollection.items}
    />
  );
};

export default PhotoPage;
