import Container from '@/components/layout/Container';
import OptimizedImage from '@/components/shared/OptimizedImage';
import { getYoutubeVideos } from '@/lib/clients/contentful';
import Link from 'next/link';
import YoutubeOverlay from './YoutubeOverlay';

const YoutubeGrid = async () => {
  const videos = await getYoutubeVideos();
  return (
    <Container>
      <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((v) => {
          return (
            <Link href={`/blog/youtube/${v.videoId}`} key={v.videoId}>
              <div className="space-y-3">
                <div className="relative aspect-[16/9] w-full cursor-pointer overflow-hidden rounded-xl md:rounded-2xl">
                  <OptimizedImage src={v.cover.url} steps={[400, 500, 600]} />
                  <YoutubeOverlay />
                </div>
                <div className="flex items-start gap-2">
                  <div className="aspect-square h-8 w-8 shrink-0 overflow-hidden rounded-full">
                    <OptimizedImage
                      src={
                        'https://res.cloudinary.com/dum2lqmke/image/upload/v1692881004/lukas_nwme8k.jpg'
                      }
                      steps={[100]}
                    />
                  </div>
                  <h2 className="font-medium">{v.title}</h2>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </Container>
  );
};

export default YoutubeGrid;
