import { getCodeProject, getCodeProjects } from '@/lib/clients/contentful';

import Container from '@/components/layout/Container';
import PageLayout from '@/components/layout/PageLayout';
import RichTextRenderer from '@/components/pages/05-blog/RichTextRenderer';
import OptimizedImage from '@/components/shared/OptimizedImage';
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

  const { title, slug, cover } = codeProject;

  return {
    title,
    openGraph: {
      title,
      type: 'article',
      url: `${process.env.NEXT_PUBLIC_URL}/code/${slug}`,
      images: [
        {
          url: `https://res.cloudinary.com/dum2lqmke/image/fetch/q_75/f_auto/dpr_1/g_south,c_fill,w_1200,h_627/${cover.url}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      images: [
        `https://res.cloudinary.com/dum2lqmke/image/fetch/q_75/f_auto/dpr_1/g_south,c_fill,w_1200,h_627/${cover.url}`,
      ],
    },
  };
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
  const { title, tagline, cover, content, url } = codeProject;
  return (
    <PageLayout
      title={title}
      subtitle={tagline}
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
