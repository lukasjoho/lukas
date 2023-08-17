import { getBlogpost, getBlogposts } from '@/lib/contentful';

import ArticleLayout from '@/components/ArticleLayout';

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
  const { title, tagline, date, content } = blogpost;
  return (
    <ArticleLayout
      title={title}
      tagline={tagline}
      date={date}
      backlink="/blog"
      content={content}
    />
  );
};

export default BlogPostPage;
