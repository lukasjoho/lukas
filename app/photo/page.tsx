import PageLayout from '@/components/layout/PageLayout';
import PhotoProjectsGrid from '@/components/pages/03-photo/PhotoProjectsGrid';

const PhotosPage = () => {
  return (
    <PageLayout
      title="With every camera click, I strive to explore souls, embed them into their environment and tell a story."
      backlink={{ href: '/', label: 'Back to home' }}
    >
      <PhotoProjectsGrid />
    </PageLayout>
  );
};

export default PhotosPage;
