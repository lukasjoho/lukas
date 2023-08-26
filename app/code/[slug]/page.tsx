import { getCodeProject, getCodeProjects } from '@/lib/clients/contentful';

import Container from '@/components/layout/Container';
import PageLayout from '@/components/layout/PageLayout';
import RichTextRenderer from '@/components/pages/05-blog/RichTextRenderer';
import OptimizedImage from '@/components/shared/OptimizedImage';
import { createMetaDataObject } from '@/lib/helpers';
import { Params } from '@/lib/types';
import { ArrowUpRight } from 'lucide-react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata | undefined> {
  const codeProject = await getCodeProject(params.slug);
  if (!codeProject) {
    return;
  }

  let { title, slug, cover, caption } = codeProject;

  return createMetaDataObject(
    { title, slug, imageUrl: cover.url, description: caption },
    { path: '/code', type: 'article', gravity: 'g_south' }
  );
}

export async function generateStaticParams() {
  const codeProjects = await getCodeProjects();
  return codeProjects.map((codeProject: any) => ({
    slug: codeProject.slug,
  }));
}

const CodeProjectPage = async ({ params }: { params: { slug: string } }) => {
  const codeProject = await getCodeProject(params.slug);
  if (!codeProject) {
    notFound();
  }
  const { title, caption, cover, content, url } = codeProject;
  return (
    <PageLayout
      title={title}
      subtitle={caption}
      backlink={{ href: '/code', label: 'Back to all' }}
      containerVariant="small"
    >
      <Container variant="small">
        <div className="space-y-6 md:space-y-12">
          <div className="flex flex-col gap-4">
            <div className="aspect-[3/2] relative overflow-hidden w-full">
              <div className="absolute bottom-0">
                <OptimizedImage src={cover.url} steps={[400, 650]} />
              </div>
            </div>

            {url && (
              <a href={url} target="_blank" className="cursor-pointer w-full">
                <button className="flex gap-1.5 w-full bg-dark text-white justify-center py-4">
                  <ArrowUpRight />
                  Visit
                </button>
              </a>
            )}
          </div>
          {content && <RichTextRenderer richTextContent={content} />}
        </div>
      </Container>
    </PageLayout>
  );
};

export default CodeProjectPage;
