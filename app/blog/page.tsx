import Container from '@/components/Container';
import PortfolioLayout from '@/components/PortfolioLayout';
import { getBlogposts } from '@/lib/contentful';
import { BlogPost } from '@/lib/types';
import BlogPostItem from './BlogPostItem';

const BlogPage = async () => {
  const res = await getBlogposts();
  let blogPosts = [];
  blogPosts = res.data?.blogPostCollection.items;
  return (
    <PortfolioLayout
      tagline="I prefer building over writing. The rare occurences of writing however
          are to be found here."
    >
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {blogPosts.map((blogpost: BlogPost, idx: number) => {
            const randomRotation = Math.random() * 10 - 5;
            return (
              <BlogPostItem
                blogpost={blogpost}
                rotation={randomRotation}
                key={idx}
              />
            );
          })}
        </div>
      </Container>
    </PortfolioLayout>
  );
};

export default BlogPage;
