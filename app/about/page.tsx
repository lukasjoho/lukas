import Container from '@/components/layout/Container';
import PageLayout from '@/components/layout/PageLayout';
import RichTextRenderer from '@/components/pages/05-blog/RichTextRenderer';
import { getAboutText } from '@/lib/clients/contentful';

const AboutPage = async () => {
  const aboutText = await getAboutText();

  return (
    <div>
      <PageLayout
        title="I am a product engineer. Before that I explored the world of product management. I like to capture moments through photography."
        backlink={{ href: '/', label: 'Back to home' }}
        containerVariant="small"
      >
        <Container variant="small">
          <RichTextRenderer richTextContent={aboutText.content} />
        </Container>
      </PageLayout>
    </div>
  );
};

export default AboutPage;
