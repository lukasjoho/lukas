import Container from '@/components/layout/Container';
import PageLayout from '@/components/layout/PageLayout';
import { getCodeProjects } from '@/lib/contentful';
import { CodeProject } from '@/lib/types';
import ProjectItem from './ProjectItem';

const CodePage = async () => {
  const projects = await getCodeProjects();
  return (
    <PageLayout
      title="As an engineer I act as my own product manager. I dont need and I dont
        want perfect requirements. Give me vision and business objectives, and
        together we will figure out exciting puzzles."
      backlink={{ href: '/', label: 'Back to home' }}
    >
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 w-full ">
          {projects.map((project: CodeProject, idx: number) => (
            <ProjectItem key={idx} project={project} />
          ))}
        </div>
      </Container>
    </PageLayout>
  );
};

export default CodePage;
