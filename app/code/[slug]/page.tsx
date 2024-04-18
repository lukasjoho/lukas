import { getCodeProject, getCodeProjects } from '@/lib/clients/contentful';

import Container from '@/components/layout/Container';
import PageLayout from '@/components/layout/PageLayout';
import PrimaryLinkButton from '@/components/shared/PrimaryLinkButton';
import { createMetaDataObject } from '@/lib/helpers';
import { Params } from '@/lib/types';
import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Balancer from 'react-wrap-balancer';

export const revalidate = 0;

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
    { title, slug, description: caption, imageUrl: cover.url },
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
  const { title, caption, cover, description, ctaLabel, ctaUrl } = codeProject;
  return (
    <PageLayout
      title={title}
      subtitle={caption}
      backlink={{ href: '/code', label: 'Back to all' }}
      containerVariant="large"
    >
      <Container variant="large">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-12">
          <div>
            <p className="mt-2 lg:text-lg">
              <Balancer>{description}</Balancer>
            </p>
            <PrimaryLinkButton
              className="mt-3"
              href={ctaUrl as string}
              icon="ArrowUpRight"
              target="_blank"
            >
              {ctaLabel}
            </PrimaryLinkButton>
          </div>
          <Image
            className="order-first rounded-lg md:order-last"
            src={cover.url}
            height={cover.height}
            width={cover.width}
            alt="projectimage"
          />
        </div>
      </Container>
    </PageLayout>
  );
};

export default CodeProjectPage;
