import Container from '@/components/layout/Container';
import { getCodeProjects } from '@/lib/clients/contentful';
import { CodeProject } from '@/lib/types';
import CodeProjectItem from './CodeProjectItem';

const CodeProjectsGrid = async () => {
  const codeProjects = await getCodeProjects();
  return (
    <Container variant="large">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
        {codeProjects.map((codeProject: CodeProject, idx: number) => {
          return (
            <CodeProjectItem codeProject={codeProject} key={codeProject.slug} />
          );
        })}
      </div>
    </Container>
  );
};

export default CodeProjectsGrid;
