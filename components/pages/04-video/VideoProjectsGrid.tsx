import Container from '@/components/layout/Container';
import VideoProjectItem from '@/components/pages/04-video/VideoProjectItem';
import { getVideoProjects } from '@/lib/clients/contentful';
import { VideoProject } from '@/lib/types';

const VideoProjectsGrid = async () => {
  const videoProjects = await getVideoProjects();

  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
        {videoProjects.map((videoProject: VideoProject, idx: number) => (
          <VideoProjectItem videoProject={videoProject} key={idx} />
        ))}
      </div>
    </Container>
  );
};

export default VideoProjectsGrid;
