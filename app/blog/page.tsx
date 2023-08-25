import PageLayout from '@/components/layout/PageLayout';
import BlogPostsGrid from '@/components/pages/05-blog/BlogPostsGrid';
import content from '@/lib/content';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `${content.blog.title} - Lukas Hoppe`,
  description: content.blog.description,
};

const BlogPage = () => {
  return (
    <PageLayout
      title={content.blog.description}
      backlink={{ href: '/', label: 'Back to home' }}
    >
      <BlogPostsGrid />
    </PageLayout>
  );
};

export default BlogPage;
