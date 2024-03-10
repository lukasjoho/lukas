import Container from '@/components/layout/Container';
import { getPhotoProjects } from '@/lib/clients/contentful';
import { PhotoProject } from '@/lib/types';
import MasonryLayout from './Masonry';
import PhotoProjectItem from './PhotoProjectItem';

const PhotoProjectsGrid = async () => {
  const photoProjects = await getPhotoProjects();
  return (
    <Container variant="fluid">
      <MasonryLayout>
        {photoProjects.map((photoProject: PhotoProject, idx: number) => {
          return (
            <PhotoProjectItem
              photoProject={photoProject}
              key={photoProject.sys.id}
            />
          );
        })}
      </MasonryLayout>
    </Container>
  );
};

export default PhotoProjectsGrid;
