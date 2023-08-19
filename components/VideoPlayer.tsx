'use client';
import React, { FC, useEffect, useRef } from 'react';

interface VideoPlayerProps {
  src: string;
  poster?: string;
}

const VideoPlayer: FC<VideoPlayerProps> = ({ src, poster }) => {
  const ref: React.RefObject<HTMLVideoElement> = useRef(null);
  useEffect(() => {
    // ref.current?.play();
  }, []);
  return (
    <video
      src={src}
      controls={true}
      poster={poster}
      className="md:max-h-[400px] lg:max-h-[600px] xl:max-h-[800px]"
      ref={ref}
    />
  );
};

export default VideoPlayer;
