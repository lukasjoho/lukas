import Container from '@/components/Container';
import PageHeader from '@/components/PageHeader';
import { getVideos } from '@/lib/contentful';
import { Video } from '@/lib/types';
import VideoItem from './VideoItem';

const VideoPage = async () => {
  const res = await getVideos();
  let videos = [];
  videos = res.data.videoCollection.items;
  return (
    <div>
      <PageHeader
        title="When I make videos, I go with the flow. I seek to capture moments, compose them into atmospheres and then portray them in short and snappy ways."
        backlink={{ href: '/', label: 'Back to home' }}
      />
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {videos.map((video: Video, idx: number) => (
            <VideoItem video={video} key={idx} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default VideoPage;
