import PageLayout from '@/components/layout/PageLayout';
import VideoProjectsGrid from '@/components/pages/04-video/VideoProjectsGrid';

const VideoPage = () => {
  return (
    <PageLayout
      title="When I make videos, I go with the flow. I seek to capture moments, compose them into atmospheres and then portray them in short and snappy ways."
      backlink={{ href: '/', label: 'Back to home' }}
    >
      <VideoProjectsGrid />
    </PageLayout>
  );
};

export default VideoPage;
