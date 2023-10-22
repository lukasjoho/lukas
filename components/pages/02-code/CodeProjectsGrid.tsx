import Container from '@/components/layout/Container';
import { getCodeProjects } from '@/lib/clients/contentful';
import { CodeProject } from '@/lib/types';
import CodeProjectItem from './CodeProjectItem';

const CodeProjectsGrid = async () => {
  const codeProjects = await getCodeProjects();
  return (
    <Container variant="large">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
        <div className="col-span-1 lg:col-span-2 lg:row-span-2">
          <CodeProjectItem
            codeProject={codeProjects[0]}
            key={codeProjects[0].slug}
          />
        </div>
        {codeProjects.map((codeProject: CodeProject, idx: number) => {
          if (idx === 0) return null;
          return (
            <CodeProjectItem codeProject={codeProject} key={codeProject.slug} />
          );
        })}
      </div>
    </Container>
  );
};

export default CodeProjectsGrid;
