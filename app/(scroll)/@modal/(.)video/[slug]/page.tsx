import InterceptionModal from '@/components/modal/InterceptionModal';
import VideoPlayer from '@/components/pages/04-video/VideoPlayer';
import { getCloudinaryImage } from '@/lib/clients/cloudinary';
import { getVideo } from '@/lib/contentful';
import { formatRatio } from '@/lib/helpers';

const VideoModal = async ({ params }: { params: { slug: string } }) => {
  const res = await getVideo(params.slug);
  const video = res.data.videoCollection.items[0];

  return (
    <InterceptionModal isCenter={true} title={video.title}>
      <VideoPlayer
        ar={video.aspectRatio}
        videoId={video.videoId}
        src={video.file?.url}
        video={video}
        poster={getCloudinaryImage(video.cover.url)
          .addTransformation(`ar_${formatRatio(video.aspectRatio)},c_crop`)
          .toURL()}
      />
    </InterceptionModal>
  );
};

export default VideoModal;
