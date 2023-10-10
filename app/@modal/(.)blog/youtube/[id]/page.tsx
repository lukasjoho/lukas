import OptimizedImage from '@/components/shared/OptimizedImage';
import InterceptionModal from '@/components/shared/modal/InterceptionModal';
import { getYoutubeVideo } from '@/lib/clients/contentful';
import { cn } from '@/lib/utils';
import { notFound } from 'next/navigation';

const YoutubeVideoModal = async ({ params }: { params: { id: string } }) => {
  const video = await getYoutubeVideo(params.id);
  if (!video) {
    return notFound();
  }
  const { title, cover, videoId } = video;

  return (
    <InterceptionModal isCenter={true} title={title}>
      <div
        className={cn(
          `pointer-events-auto relative aspect-[16/9] w-full overflow-hidden`
        )}
      >
        <OptimizedImage src={cover.url} />
        <iframe
          className="absolute left-0 top-0 h-full w-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=0&origin=http://example.com&controls=1&rel=1`}
        />
      </div>
    </InterceptionModal>
  );
};

export default YoutubeVideoModal;
