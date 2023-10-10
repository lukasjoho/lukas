import Container from '@/components/layout/Container';
import PageLayout from '@/components/layout/PageLayout';
import OptimizedImage from '@/components/shared/OptimizedImage';
import { getYoutubeVideo, getYoutubeVideos } from '@/lib/clients/contentful';
import { YoutubeVideo } from '@/lib/types';
import { cn } from '@/lib/utils';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const videos = await getYoutubeVideos();
  return videos.map((video: YoutubeVideo) => ({
    id: video.videoId,
  }));
}

const YoutubeVideoPage = async ({ params }: { params: { id: string } }) => {
  const video = await getYoutubeVideo(params.id);
  if (!video) {
    notFound();
  }
  const { title, cover, videoId } = video;
  return (
    <PageLayout
      title={title}
      backlink={{ href: '/blog/youtube', label: 'Back to all' }}
      containerVariant="small"
    >
      <Container variant="small">
        <div
          className={cn(
            `pointer-events-auto relative aspect-[16/9] w-full overflow-hidden`
          )}
        >
          <OptimizedImage src={cover.url} />
          <iframe
            className="absolute left-0 top-0 h-full w-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=0&origin=http://example.com&controls=1&rel=1`}
          />
        </div>
      </Container>
    </PageLayout>
  );
};

export default YoutubeVideoPage;
