import { getCodeProject, getCodeProjects } from '@/lib/contentful';

import ArticleLayout from '@/components/ArticleLayout';
import CloudImage from '@/components/CloudinaryImage';
import { ArrowUpRight } from 'lucide-react';

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
      <ArticleLayout
        title={title}
        tagline={tagline}
        backlink="/code"
        content={content}
      >
        <div className="aspect-[3/2] relative overflow-hidden">
          <div className="absolute bottom-0">
            <CloudImage src={cover.url} steps={[400, 650]} />
          </div>
        </div>
        {url && (
          <a href={url} target="_blank" className="cursor-pointer">
            <button className="flex gap-1.5 w-full bg-dark text-white justify-center py-4 mt-4">
              <ArrowUpRight />
              Visit
            </button>
          </a>
        )}
      </ArticleLayout>
    </div>
  );
};

export default CodeProjectPage;
