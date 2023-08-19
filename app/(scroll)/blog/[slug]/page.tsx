import { getBlogpost, getBlogposts } from '@/lib/contentful';

import Container from '@/components/Container';
import PageHeader from '@/components/PageHeader';
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
    <div>
      <PageHeader
        title={title}
        subtitle={tagline}
        backlink={{ href: '/blog', label: 'Back to all' }}
        containerVariant="small"
      />
      <Container variant="small">
        {content && (
          <div className="relative">
            <RichTextRenderer json={content.json} links={content.links} />
          </div>
        )}
      </Container>
    </div>
  );
};

export default BlogPostPage;
