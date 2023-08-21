import { getBlogpost, getBlogposts } from '@/lib/contentful';

import Container from '@/components/Container';
import PageLayout from '@/components/PageLayout';
import RichTextRenderer from '@/components/RichTextRenderer';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const res = await getBlogposts();
  const blogposts = res.data.blogPostCollection.items;
  return blogposts.map((blogpost: any) => ({
    slug: blogpost.slug,
  }));
}

const BlogPostPage = async ({ params }: { params: { slug: string } }) => {
  const res = await getBlogpost(params.slug);
  const blogpost = res.data.blogPostCollection.items[0];
  if (!blogpost) {
    notFound();
  }
  const { title, tagline, date, content } = blogpost;
  return (
    <PageLayout
      title={title}
      backlink={{ href: '/blog', label: 'Back to all' }}
      subtitle={tagline}
      containerVariant="small"
    >
      <Container variant="small">
        {content && (
          <div className="relative w-full overflow-hidden">
            <RichTextRenderer json={content.json} links={content.links} />
          </div>
        )}
      </Container>
    </PageLayout>
  );
};

export default BlogPostPage;
