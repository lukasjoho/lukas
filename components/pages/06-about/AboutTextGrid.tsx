import Container from '@/components/layout/Container';
import { getAboutText } from '@/lib/clients/contentful';
import { notFound } from 'next/navigation';
import RichTextRenderer from '../05-blog/RichTextRenderer';

const AboutTextGrid = async () => {
  const aboutText = await getAboutText();
  if (!aboutText) {
    notFound();
  }
  const { content } = aboutText;
  return (
    <Container variant="small">
      <RichTextRenderer richTextContent={content} />
    </Container>
  );
};

export default AboutTextGrid;
