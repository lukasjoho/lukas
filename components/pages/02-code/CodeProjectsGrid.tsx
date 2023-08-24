import Container from '@/components/layout/Container';
import { getCodeProjects } from '@/lib/clients/contentful';
import { CodeProject } from '@/lib/types';
import CodeProjectItem from './CodeProjectItem';

const CodeProjectsGrid = async () => {
  const codeProjects = await getCodeProjects();
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
        {codeProjects.map((codeProject: CodeProject, idx: number) => (
          <CodeProjectItem codeProject={codeProject} key={idx} />
        ))}
      </div>
    </Container>
  );
};

export default CodeProjectsGrid;
