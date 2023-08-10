import InterceptionModal from '@/components/InterceptionModal';
import VideoPlayer from '@/components/VideoPlayer';
import { getVideo } from '@/lib/contentful';
import React, { useRef } from 'react';

const VideoModal = async ({ params }: { params: { slug: string } }) => {
  const res = await getVideo(params.slug);
  const video = res.data.videoCollection.items[0];

  return (
    <InterceptionModal>
      <VideoPlayer src={video.file.url} />
    </InterceptionModal>
  );
};

export default VideoModal;
