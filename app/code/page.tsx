import PageLayout from '@/components/layout/PageLayout';
import CodeProjectsGrid from '@/components/pages/02-code/CodeProjectsGrid';
import content from '@/lib/content';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `${content.code.title} - Lukas Hoppe`,
  description: content.code.description,
};

const CodePage = () => {
  return (
    <PageLayout
      title={content.code.description}
      backlink={{ href: '/', label: 'Back to home' }}
      titleVariant="thin"
      containerVariant="large"
    >
      <CodeProjectsGrid />
    </PageLayout>
  );
};

export default CodePage;
