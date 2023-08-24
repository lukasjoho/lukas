import InterceptionModal from '@/components/modal/InterceptionModal';
import VideoPlayer from '@/components/pages/04-video/VideoPlayer';
import { getVideoProject } from '@/lib/clients/contentful';
import { notFound } from 'next/navigation';

const VideoProjectModal = async ({ params }: { params: { slug: string } }) => {
  const videoProject = await getVideoProject(params.slug);
  if (!videoProject) {
    return notFound();
  }
  const { title } = videoProject;

  return (
    <InterceptionModal isCenter={true} title={title}>
      <VideoPlayer video={videoProject} />
    </InterceptionModal>
  );
};

export default VideoProjectModal;
