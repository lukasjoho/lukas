import Container from '@/components/Container';
import PageLayout from '@/components/PageLayout';
import RichTextRenderer from '@/components/RichTextRenderer';
import { getAboutText } from '@/lib/contentful';

const AboutPage = async () => {
  const res = await getAboutText();
  const aboutText = res.data.aboutTextCollection.items[0];
  return (
    <div>
      <PageLayout
        title="I am a product engineer. Before that I explored the world of product management. I like to capture moments through photography."
        backlink={{ href: '/', label: 'Back to home' }}
        containerVariant="small"
      >
        <Container variant="small">
          <RichTextRenderer
            json={aboutText.content.json}
            links={aboutText.content.links}
          />
        </Container>
      </PageLayout>
    </div>
  );
};

export default AboutPage;
