import PageLayout from '@/components/layout/PageLayout';
import AboutTextGrid from '@/components/pages/06-about/AboutTextGrid';
import content from '@/lib/content';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `${content.about.title} - Lukas Hoppe`,
  description: content.about.description,
};

const AboutPage = () => {
  return (
    <div>
      <PageLayout
        title={content.about.description}
        backlink={{ href: '/', label: 'Back to home' }}
        containerVariant="small"
        titleVariant="thin"
      >
        <AboutTextGrid />
      </PageLayout>
    </div>
  );
};

export default AboutPage;
