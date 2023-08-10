import { getVideos } from '@/lib/contentful';
import React from 'react';

export async function generateStaticParams() {
  const res = await getVideos();
  const videos = res.data.videoCollection.items;
  return videos.map((video: any) => ({
    slug: video.slug,
  }));
}

const VideoPage = () => {
  return <div>Video</div>;
};

export default VideoPage;
