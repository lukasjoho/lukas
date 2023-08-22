import Container from '@/components/Container';
import PageLayout from '@/components/PageLayout';
import VideoPlayer from '@/components/VideoPlayer';
import { getCloudinaryImage } from '@/lib/cloudinary';
import { getVideo, getVideos } from '@/lib/contentful';
import { formatRatio } from '@/lib/formatRatio';

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
