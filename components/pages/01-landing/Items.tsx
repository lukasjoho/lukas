import { Icons } from '@/components/shared/Icons';
import OptimizedImage from '@/components/shared/OptimizedImage';
import { getBlogposts } from '@/lib/clients/contentful';
import { BlogNote } from './BlogNote';
import { PanelItem } from './PanelItem';
import { Polaroid } from './Polaroid';
import { VideoFrame } from './VideoFrame';

export const VideoItems = ({ idx }: PanelItemsProps) => {
  return (
    <>
      <PanelItem
        idx={idx}
        className="w-[40%] translate-x-[45%] translate-y-[25%] -rotate-[7deg] group-hover:translate-x-[55%] group-hover:translate-y-[10%] group-hover:rotate-[-14deg]"
      >
        <VideoFrame image="/images/home/video/bachalpe.jpg" />
      </PanelItem>
      <PanelItem
        idx={idx}
        className="w-[40%] -translate-y-[50%] translate-x-[0%] -rotate-[3deg] group-hover:-translate-y-[70%] group-hover:-rotate-[6deg]"
      >
        <VideoFrame image="/images/home/video/streif.jpg" />
      </PanelItem>
      <PanelItem
        idx={idx}
        className="w-[40%] -translate-x-[45%] translate-y-[15%] rotate-[7deg] group-hover:translate-x-[-55%] group-hover:translate-y-[-5%] group-hover:rotate-[14deg]"
      >
        <VideoFrame image="/images/home/video/krabi.jpg" />
      </PanelItem>
    </>
  );
};

export const PhotoItems = ({ idx }: PanelItemsProps) => {
  return (
    <>
      <PanelItem
        idx={idx}
        className="w-[30%] translate-x-[70%] translate-y-[30%] rotate-[10deg] group-hover:translate-x-[85%] group-hover:translate-y-[10%] group-hover:rotate-[20deg]"
      >
        <Polaroid image="/images/home/photo/hiking.png" />
      </PanelItem>
      <PanelItem
        idx={idx}
        className="w-[30%] translate-x-[0%] translate-y-[5%] rotate-[5deg] group-hover:translate-y-[-15%]  group-hover:rotate-[10deg]"
      >
        <Polaroid image="/images/home/photo/kimmich.png" />
      </PanelItem>
      <PanelItem
        idx={idx}
        className="w-[30%] -translate-x-[70%] translate-y-[20%] -rotate-[10deg] group-hover:-translate-x-[85%] group-hover:translate-y-[0%] group-hover:-rotate-[20deg]"
      >
        <Polaroid image="/images/home/photo/fishing.png" />
      </PanelItem>
    </>
  );
};

export const BlogItems = async ({ idx }: PanelItemsProps) => {
  const blogPosts = await getBlogposts({ limit: 3 });

  return (
    <>
      {blogPosts.length > 0 && (
        <PanelItem
          idx={idx}
          className="w-[40%] translate-x-[45%] translate-y-[30%] -rotate-[5deg] group-hover:translate-x-[55%] group-hover:translate-y-[0%] group-hover:rotate-[-10deg] md:w-[40%]"
        >
          <BlogNote
            title={blogPosts[0].title || 'Product Analytics 101'}
            date={blogPosts[0].date}
          />
        </PanelItem>
      )}

      {blogPosts.length > 1 && (
        <PanelItem
          idx={idx}
          className="w-[40%] -translate-y-[30%] translate-x-[0%] -rotate-[3deg] group-hover:-translate-y-[60%] group-hover:rotate-[-6deg] md:w-[40%]"
        >
          <BlogNote
            title={blogPosts[1].title || 'The Experimentation Pyramid'}
            date={blogPosts[1].date}
          />
        </PanelItem>
      )}
      <PanelItem
        idx={idx}
        className="w-[7%] translate-x-[300%] translate-y-[-300%] rotate-[5deg] group-hover:translate-x-[350%] group-hover:translate-y-[-500%] group-hover:rotate-[10deg] md:w-[7%]"
      >
        <Icons.youtube3d className="drop-shadow-xl" />
      </PanelItem>
      <PanelItem
        idx={idx}
        className="w-[12%] translate-x-[-200%] translate-y-[-200%] rotate-[-8deg] group-hover:translate-x-[-220%] group-hover:translate-y-[-280%] group-hover:rotate-[-15deg] md:w-[12%]"
      >
        <Icons.youtube3d className="drop-shadow-xl" />
      </PanelItem>
      <PanelItem
        idx={idx}
        className="w-[40%] -translate-x-[45%] translate-y-[30%] rotate-[10deg] group-hover:-translate-x-[55%] group-hover:translate-y-[0%] group-hover:rotate-[20deg] md:w-[40%]"
      >
        <BlogNote title={'Product Engineering'} date={'2022-10-10'} />
      </PanelItem>
    </>
  );
};

interface PanelItemsProps {
  idx: number;
}

export const CodeItems = ({ idx }: PanelItemsProps) => {
  return (
    <>
      <PanelItem
        className="w-1/2 translate-x-1/3 translate-y-[15%] rotate-[10deg] group-hover:translate-x-[45%] group-hover:translate-y-[0%] group-hover:rotate-[20deg]"
        idx={idx}
      >
        <OptimizedImage
          src="https://res.cloudinary.com/dum2lqmke/image/upload/v1691792149/landing-code-laptop-1_aip0nw.png"
          steps={[180, 250, 300, 450]}
        />
      </PanelItem>
      <PanelItem
        className="w-1/2 -translate-x-1/3 translate-y-[20%] -rotate-[7deg] group-hover:translate-x-[-45%] group-hover:translate-y-[0%] group-hover:rotate-[-14deg]"
        idx={idx}
      >
        <OptimizedImage
          src="https://res.cloudinary.com/dum2lqmke/image/upload/v1691792149/landing-code-laptop-2_ln921f.png"
          steps={[180, 250, 300, 450]}
        />
      </PanelItem>
      <PanelItem
        className="w-1/6 translate-y-[10%] -rotate-[4deg] group-hover:translate-y-[-10%] group-hover:rotate-[-8deg]"
        idx={idx}
      >
        <OptimizedImage
          src="https://res.cloudinary.com/dum2lqmke/image/upload/v1691792149/landing-code-iphone_rmlypq.png"
          steps={[180, 250, 300, 450]}
        />
      </PanelItem>
    </>
  );
};
