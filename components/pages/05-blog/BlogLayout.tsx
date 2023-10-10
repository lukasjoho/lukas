import Container from '@/components/layout/Container';
import PageLayout from '@/components/layout/PageLayout';
import { Tab, Tabs } from '@/components/pages/05-blog/Tabs';
import content from '@/lib/content';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `${content.blog.title} - Lukas Hoppe`,
  description: content.blog.description,
};

const BlogLayout = ({ children }: any) => {
  return (
    <PageLayout
      title={content.blog.description}
      backlink={{ href: '/', label: 'Back to home' }}
      titleVariant="thin"
    >
      <Container className="mb-3 items-start md:mb-6">
        <Tabs>
          <Tab id="youtube">Youtube</Tab>
          <Tab id="articles">Articles</Tab>
        </Tabs>
      </Container>
      {children}
    </PageLayout>
  );
};

export default BlogLayout;
