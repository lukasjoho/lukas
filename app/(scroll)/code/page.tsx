import Container from '@/components/Container';
import PageHeader from '@/components/PageHeader';
import { getCodeProjects } from '@/lib/contentful';
import { Project } from '@/lib/types';
import ProjectItem from './ProjectItem';

const CodePage = async () => {
  const res = await getCodeProjects();
  let projects = [];
  projects = res?.data?.projectCollection?.items;
  return (
    <div>
      <PageHeader
        title="As an engineer I act as my own product manager. I dont need and I dont
        want perfect requirements. Give me vision and business objectives, and
        together we will figure out exciting puzzles."
        backlink={{ href: '/', label: 'Back to home' }}
      />
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full ">
          {projects.map((project: Project, idx: number) => (
            <ProjectItem key={idx} project={project} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default CodePage;
