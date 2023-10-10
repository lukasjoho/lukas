import PageLayout from '@/components/layout/PageLayout';
import PhotoProjectsGrid from '@/components/pages/03-photo/PhotoProjectsGrid';
import content from '@/lib/content';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `${content.photo.title} - Lukas Hoppe`,
  description: content.photo.description,
};

const PhotosPage = () => {
  return (
    <PageLayout
      title={content.photo.description}
      backlink={{ href: '/', label: 'Back to home' }}
      titleVariant="thin"
    >
      <PhotoProjectsGrid />
    </PageLayout>
  );
};

export default PhotosPage;
