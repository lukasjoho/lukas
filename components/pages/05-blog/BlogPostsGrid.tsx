import Container from '@/components/layout/Container';
import { getBlogposts } from '@/lib/clients/contentful';
import { BlogPost } from '@/lib/types';
import BlogPostItem from './BlogPostItem';

const BlogPostsGrid = async () => {
  const blogPosts = await getBlogposts();

  return (
    <Container>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {blogPosts.map((blogPost: BlogPost, idx: number) => {
          const randomRotation = Math.random() * 10 - 5;
          return (
            <BlogPostItem
              blogPost={blogPost}
              rotation={randomRotation}
              key={idx}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default BlogPostsGrid;
