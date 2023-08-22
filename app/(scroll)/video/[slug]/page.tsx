import Container from '@/components/Container';
import PageHeader from '@/components/PageHeader';
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
    <div>
      <PageHeader
        title={video.title}
        backlink={{ href: '/video', label: 'Back to all' }}
        containerVariant="medium"
      />
      <Container variant="medium" className="items-center">
        <VideoPlayer
          src={video.file?.url}
          videoId={video.videoId}
          poster={getCloudinaryImage(video.cover.url)
            .addTransformation(`ar_${formatRatio(video.aspectRatio)},c_crop`)
            .toURL()}
        />
      </Container>
    </div>
  );
};

export default VideoPage;
