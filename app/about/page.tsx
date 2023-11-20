import PageLayout from '@/components/layout/PageLayout';
import Glacier from '@/components/pages/06-about/Glacier';
import Intro from '@/components/pages/06-about/Intro';
import QuoteSlider from '@/components/pages/06-about/QuoteSlider';
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
        containerVariant="normal"
        titleVariant="thin"
      >
        <div className="space-y-6 md:space-y-12">
          <Intro />
          <QuoteSlider />
          <Glacier />
        </div>
      </PageLayout>
    </div>
  );
};

export default AboutPage;
