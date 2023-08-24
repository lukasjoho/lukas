import Container from '@/components/layout/Container';
import ShowcaseGrid from '@/components/pages/01-landing/ShowcaseGrid';

export default function Home() {
  return (
    <Container variant="fluid" className="grow justify-center">
      <ShowcaseGrid />
    </Container>
  );
}
