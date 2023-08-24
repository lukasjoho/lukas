import Container from '@/components/layout/Container';
import PageLayout from '@/components/layout/PageLayout';
import VideoPlayer from '@/components/pages/04-video/VideoPlayer';
import { getCloudinaryImage } from '@/lib/clients/cloudinary';
import { getVideo, getVideos } from '@/lib/contentful';
import { formatRatio } from '@/lib/helpers';

export async function generateStaticParams() {
  const res = await getVideos();
  const videos = res.data.videoCollection.items;
  return videos.map((video: any) => ({
    slug: video.slug,
  }));
}

const VideoPage = async ({ params }: { params: { slug: string } }) => {
  const res = await getVideo(params.slug);
  const video = res.data.videoCollection.items[0];

  return (
    <PageLayout
      title={video.title}
      backlink={{ href: '/video', label: 'Back to all' }}
      containerVariant="medium"
    >
      <Container variant="medium" className="items-center">
        <VideoPlayer
          ar={video.aspectRatio}
          videoId={video.videoId}
          src={video.file?.url}
          video={video}
          poster={getCloudinaryImage(video.cover.url)
            .addTransformation(`ar_${formatRatio(video.aspectRatio)},c_crop`)
            .toURL()}
        />
      </Container>
    </PageLayout>
  );
};

export default VideoPage;
