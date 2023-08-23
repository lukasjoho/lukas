import Container from '@/components/layout/Container';
import PageLayout from '@/components/layout/PageLayout';
import { getVideos } from '@/lib/contentful';
import { Video } from '@/lib/types';
import VideoItem from './VideoItem';

export const revalidate = 0;

const VideoPage = async () => {
  const res = await getVideos();
  let videos = [];
  videos = res.data.videoCollection.items;
  return (
    <PageLayout
      title="When I make videos, I go with the flow. I seek to capture moments, compose them into atmospheres and then portray them in short and snappy ways."
      backlink={{ href: '/', label: 'Back to home' }}
    >
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {videos.map((video: Video, idx: number) => (
            <VideoItem video={video} key={idx} />
          ))}
        </div>
      </Container>
    </PageLayout>
  );
};

export default VideoPage;
