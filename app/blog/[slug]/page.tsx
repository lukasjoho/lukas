import { getBlogpost, getBlogposts } from '@/lib/clients/contentful';

import Container from '@/components/layout/Container';
import PageLayout from '@/components/layout/PageLayout';
import RichTextRenderer from '@/components/pages/05-blog/RichTextRenderer';
import { createMetaDataObject } from '@/lib/helpers';
import { BlogPost, Params } from '@/lib/types';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata | undefined> {
  const codeProject = await getBlogpost(params.slug);
  if (!codeProject) {
    return;
  }
  const { title, slug, caption } = codeProject;

  return createMetaDataObject(
    { title, slug, description: caption },
    { path: '/blog', type: 'article' }
  );
}

export async function generateStaticParams() {
  const blogPosts = await getBlogposts();
  return blogPosts.map((blogPost: BlogPost) => ({
    slug: blogPost.slug,
  }));
}

const BlogPostPage = async ({ params }: { params: { slug: string } }) => {
  const blogPost = await getBlogpost(params.slug);
  if (!blogPost) {
    notFound();
  }
  const { title, caption, content } = blogPost;
  return (
    <PageLayout
      title={title}
      backlink={{ href: '/blog', label: 'Back to all' }}
      subtitle={caption}
      containerVariant="small"
    >
      <Container variant="small">
        {content && (
          <div className="relative w-full overflow-hidden">
            <RichTextRenderer richTextContent={content} />
          </div>
        )}
      </Container>
    </PageLayout>
  );
};

export default BlogPostPage;
