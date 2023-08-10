"use client";
import React, { FC, useEffect, useRef } from "react";
import ReactPlayer from "react-player";

interface VideoPlayerProps {
  src: string;
}

const VideoPlayer: FC<VideoPlayerProps> = ({ src }) => {
  const ref: React.RefObject<HTMLVideoElement> = useRef(null);
  useEffect(() => {
    ref.current?.play();
  }, []);
  return (
    <video
      src={src}
      controls={true}
      poster="http://placekitten.com/200/300"
      className="max-h-[800px]"
      ref={ref}
    />
  );
};

export default VideoPlayer;
