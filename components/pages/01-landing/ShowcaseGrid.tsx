import Link from 'next/link';
import Avatar from './Avatar';
import { BlogItems, CodeItems, PhotoItems, VideoItems } from './Items';
import Panel from './Panel';

const ShowcaseGrid = () => {
  return (
    <div className="relative grid max-h-[1800px] w-full grow grid-cols-2 gap-3 pb-3 md:gap-4 md:pb-4">
      <Panel title="code" href="/code">
        <CodeItems idx={1} />
      </Panel>
      <Panel title="photo" href="/photo">
        <PhotoItems idx={2} />
      </Panel>
      <Panel title="video" href="/video">
        <VideoItems idx={3} />
      </Panel>
      <Panel title="blog" href="/blog/youtube">
        <BlogItems idx={4} />
      </Panel>
      <Link
        href="/about"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 "
      >
        <Avatar />
      </Link>
    </div>
  );
};

export default ShowcaseGrid;
