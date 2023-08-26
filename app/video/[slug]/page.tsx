import Container from '@/components/layout/Container';
import PageLayout from '@/components/layout/PageLayout';
import VideoPlayer from '@/components/pages/04-video/VideoPlayer';
import { getVideoProject, getVideoProjects } from '@/lib/clients/contentful';
import { createMetaDataObject } from '@/lib/helpers';
import { Params, VideoProject } from '@/lib/types';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata | undefined> {
  const videoProject = await getVideoProject(params.slug);
  if (!videoProject) {
    return;
  }
  const { title, slug, cover, caption } = videoProject;

  return createMetaDataObject(
    { title, slug, imageUrl: cover.url, description: caption },
    { path: '/video', type: 'article' }
  );
}

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
