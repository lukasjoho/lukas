import Container from '@/components/layout/Container';
import Avatar from '@/components/pages/01-landing/Avatar';
import {
  BlogItems,
  CodeItems,
  PhotoItems,
  VideoItems,
} from '@/components/pages/01-landing/Items';
import Panel from '@/components/pages/01-landing/Panel';
import Link from 'next/link';

export default function Home() {
  return (
    <Container variant="static" className="grow justify-center">
      <div className="grid grid-cols-2 gap-2 md:gap-4 w-full grow relative pb-4 max-h-[1400px]">
        <Panel title="code" href="/code">
          <CodeItems idx={1} />
        </Panel>
        <Panel title="photo" href="/photo">
          <PhotoItems idx={2} />
        </Panel>
        <Panel title="video" href="/video">
          <VideoItems idx={3} />
        </Panel>
        <Panel title="blog" href="/blog">
          <BlogItems idx={4} />
        </Panel>
        <Link
          href="/about"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 "
        >
          <Avatar />
        </Link>
      </div>
    </Container>
  );
}
