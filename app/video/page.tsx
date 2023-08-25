import PageLayout from '@/components/layout/PageLayout';
import VideoProjectsGrid from '@/components/pages/04-video/VideoProjectsGrid';
import content from '@/lib/content';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `${content.video.title} - Lukas Hoppe`,
  description: content.video.description,
};

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
