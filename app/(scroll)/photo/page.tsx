import Container from '@/components/Container';
import PageLayout from '@/components/PageLayout';
import PhotoMasonry from '@/components/PhotoMasonry';

const PhotosPage = () => {
  return (
    <PageLayout
      title="With every camera click, I strive to explore souls, embed them into their environment and tell a story."
      backlink={{ href: '/', label: 'Back to home' }}
    >
      <Container variant="fluid">
        <PhotoMasonry />
      </Container>
    </PageLayout>
  );
};

export default PhotosPage;
