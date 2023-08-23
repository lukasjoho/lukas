import OptimizedImage from '@/components/shared/OptimizedImage';
import { formatRatio } from '@/lib/formatRatio';
import { cn } from '@/lib/utils';
import { FC } from 'react';

interface VideoPlayerProps {
  src?: string;
  videoId?: string;
  poster?: string;
  ar?: string;
  video: any;
}

const VideoPlayer: FC<VideoPlayerProps> = ({
  src,
  videoId,
  poster,
  ar,
  video,
}) => {
  // const ref: React.RefObject<HTMLVideoElement> = useRef(null);
  const arDiv = formatRatio(ar);
  // useEffect(() => {
  //   // ref.current?.play();
  // }, []);
  return (
    <>
      {src && (
        <video
          src={src}
          controls={true}
          poster={poster}
          className={cn(
            `pointer-events-auto`,
            arDiv > 1 ? 'w-full' : 'h-[400px] md:h-[600px]'
          )}
          style={{
            objectFit: 'cover',
          }}
          // ref={ref}
        />
      )}
      {videoId && (
        <div
          className={cn(
            `pointer-events-auto relative aspect-[16/9] w-full overflow-hidden`
          )}
        >
          <OptimizedImage src={video.cover.url} />
          <iframe
            className="absolute w-full h-full left-0 top-0"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=0&origin=http://example.com&controls=0&rel=1`}
          />
        </div>
      )}
    </>
  );
};

export default VideoPlayer;
