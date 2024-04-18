import CodePageItem from '@/components/pages/02-code/CodePageItem';
import { getCodeProject, getCodeProjects } from '@/lib/clients/contentful';
import { CodeProject } from '@/lib/types';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const projects = await getCodeProjects();
  return projects.map((p: CodeProject) => ({
    slug: p.slug,
  }));
}

const CodePage = async ({ params }: { params: { slug: string } }) => {
  const project = await getCodeProject(params.slug);
  if (!project) {
    notFound();
  }

  return <CodePageItem project={project} />;
};

export default CodePage;
