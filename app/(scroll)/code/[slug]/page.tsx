import { getCodeProject, getCodeProjects } from '@/lib/contentful';

import CloudImage from '@/components/CloudinaryImage';
import Container from '@/components/Container';
import PageHeader from '@/components/PageHeader';
import RichTextRenderer from '@/components/RichTextRenderer';
import { ArrowUpRight } from 'lucide-react';
import React, { FC } from 'react';

export const revalidate = 0;

export async function generateStaticParams() {
  const res = await getCodeProjects();
  const codeProjects = res.data.projectCollection.items;
  return codeProjects.map((codeProject: any) => ({
    slug: codeProject.slug,
  }));
}

const CodeProjectPage = async ({ params }: { params: { slug: string } }) => {
  const res = await getCodeProject(params.slug);
  const codeProject = res.data.projectCollection.items[0];
  const { title, tagline, cover, content, url } = codeProject;
  return (
    <div>
      <PageHeader
        title={title}
        subtitle={tagline}
        backlink={{ href: '/code', label: 'Back to all' }}
        containerVariant="small"
      />
      <Container variant="small">
        <div className="aspect-[3/2] relative overflow-hidden w-full">
          <div className="absolute bottom-0">
            <CloudImage src={cover.url} steps={[400, 650]} />
          </div>
        </div>
        {url && (
          <a href={url} target="_blank" className="cursor-pointer w-full">
            <button className="flex gap-1.5 w-full bg-dark text-white justify-center py-4 mt-4">
              <ArrowUpRight />
              Visit
            </button>
          </a>
        )}
        {content && (
          <RichTextRenderer
            className="mt-16"
            json={content.json}
            links={content.links}
          />
        )}
      </Container>
    </div>
  );
};

export default CodeProjectPage;

interface ArticleLayoutProps {
  children: React.ReactNode;
}

const ArticleLayout: FC<ArticleLayoutProps> = ({ children }) => {
  return <div></div>;
};
