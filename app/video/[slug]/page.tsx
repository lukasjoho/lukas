import Container from '@/components/layout/Container';
import PageLayout from '@/components/layout/PageLayout';
import VideoPlayer from '@/components/pages/04-video/VideoPlayer';
import { getVideoProject, getVideoProjects } from '@/lib/clients/contentful';
import { VideoProject } from '@/lib/types';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const videoProjects = await getVideoProjects();
  return videoProjects.map((video: VideoProject) => ({
    slug: video.slug,
  }));
}

const VideoPage = async ({ params }: { params: { slug: string } }) => {
  const videoProject = await getVideoProject(params.slug);
  if (!videoProject) {
    return notFound();
  }
  const { title } = videoProject;

  return (
    <PageLayout
      title={title}
      backlink={{ href: '/video', label: 'Back to all' }}
      containerVariant="medium"
    >
      <Container variant="medium" className="items-center">
        <VideoPlayer video={videoProject} />
      </Container>
    </PageLayout>
  );
};

export default VideoPage;
