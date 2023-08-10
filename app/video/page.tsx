import PortfolioLayout from '@/components/PortfolioLayout';
import { getVideos } from '@/lib/contentful';
import React from 'react';
import VideoItem from './VideoItem';
import { Video } from '@/lib/types';
import Container from '@/components/Container';

export const revalidate = 0;

const VideoPage = async () => {
  const res = await getVideos();
  let videos = [];
  videos = res.data.videoCollection.items;
  return (
    <PortfolioLayout tagline="When I make videos, I go with the flow. I seek to capture moments, compose them into atmospheres and then portray them in short and snappy ways.">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {videos.map((video: Video, idx: number) => (
            <VideoItem video={video} key={idx} />
          ))}
        </div>
      </Container>
    </PortfolioLayout>
  );
};

export default VideoPage;
