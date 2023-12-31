import OptimizedImage from '@/components/shared/OptimizedImage';
import { formatRatio, getPosterFromCover } from '@/lib/helpers';
import { VideoProjectDetailed } from '@/lib/types';
import { cn } from '@/lib/utils';
import { FC } from 'react';

interface VideoPlayerProps {
  video: VideoProjectDetailed;
}

const VideoPlayer: FC<VideoPlayerProps> = ({ video }) => {
  const { title, aspectRatio, youtubeId, file, cover } = video;
  // const ref: React.RefObject<HTMLVideoElement> = useRef(null);
  const arDiv = formatRatio(aspectRatio);
  // useEffect(() => {
  //   // ref.current?.play();
  // }, []);

  if (youtubeId) {
    return (
      <div
        className={cn(
          `pointer-events-auto relative aspect-[16/9] w-full overflow-hidden`
        )}
      >
        <OptimizedImage src={cover.url} />
        <iframe
          className="absolute w-full h-full left-0 top-0"
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=0&origin=http://example.com&controls=0&rel=1`}
        />
      </div>
    );
  }
  return (
    <video
      src={file?.url}
      controls={true}
      poster={getPosterFromCover(cover, aspectRatio)}
      className={cn(
        `pointer-events-auto`,
        arDiv > 1 ? 'w-full' : 'h-[400px] md:h-[600px]'
      )}
      style={{
        objectFit: 'cover',
      }}
      // ref={ref}
    />
  );
};

export default VideoPlayer;
