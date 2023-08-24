import PageLayout from '@/components/layout/PageLayout';
import AboutTextGrid from '@/components/pages/06-about/AboutTextGrid';

const AboutPage = () => {
  return (
    <div>
      <PageLayout
        title="I am a product engineer. Before that I explored the world of product management. I like to capture moments through photography."
        backlink={{ href: '/', label: 'Back to home' }}
        containerVariant="small"
      >
        <AboutTextGrid />
      </PageLayout>
    </div>
  );
};

export default AboutPage;
