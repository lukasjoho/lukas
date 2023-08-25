import Container from '@/components/layout/Container';
import PageLayout from '@/components/layout/PageLayout';
import VideoPlayer from '@/components/pages/04-video/VideoPlayer';
import { getVideoProject, getVideoProjects } from '@/lib/clients/contentful';
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

  const { title, slug, cover } = videoProject;

  return {
    title,
    openGraph: {
      title,
      type: 'article',
      url: `${process.env.NEXT_PUBLIC_URL}/video/${slug}`,
      images: [
        {
          url: `https://res.cloudinary.com/dum2lqmke/image/fetch/q_75/f_auto/dpr_1/g_face,c_fill,w_1200,h_627/${cover.url}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      images: [
        `https://res.cloudinary.com/dum2lqmke/image/fetch/q_75/f_auto/dpr_1/g_face,c_fill,w_1200,h_627/${cover.url}`,
      ],
    },
  };
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
