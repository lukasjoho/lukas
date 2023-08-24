import PageLayout from '@/components/layout/PageLayout';
import BlogPostsGrid from '@/components/pages/05-blog/BlogPostsGrid';

const BlogPage = () => {
  return (
    <PageLayout
      title="I prefer building over writing. The rare occurences of writing however
        are to be found here."
      backlink={{ href: '/', label: 'Back to home' }}
    >
      <BlogPostsGrid />
    </PageLayout>
  );
};

export default BlogPage;
