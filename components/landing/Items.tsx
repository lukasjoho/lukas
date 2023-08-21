import { getBlogposts } from '@/lib/contentful';
import OptimizedImage from '../OptimizedImage';
import { BlogNote } from './BlogNote';
import { PanelItem } from './PanelItem';
import { Polaroid } from './Polaroid';
import { VideoFrame } from './VideoFrame';

export const VideoItems = ({ idx }: PanelItemsProps) => {
  return (
    <>
      <PanelItem
        idx={idx}
        className="w-[40%] translate-x-[45%] -rotate-[7deg] translate-y-[25%] group-hover:translate-y-[10%] group-hover:translate-x-[55%] group-hover:rotate-[-14deg]"
      >
        <VideoFrame imageUrl="https://res.cloudinary.com/dum2lqmke/image/upload/v1691791709/image-basketball_r8glow.jpg" />
      </PanelItem>
      <PanelItem
        idx={idx}
        className="w-[40%] translate-x-[0%] -rotate-[3deg] -translate-y-[50%] group-hover:-translate-y-[70%] group-hover:-rotate-[6deg]"
      >
        <VideoFrame imageUrl="https://res.cloudinary.com/dum2lqmke/image/upload/v1691791709/image-wakeboard_plgkq4.jpg" />
      </PanelItem>
      <PanelItem
        idx={idx}
        className="w-[40%] -translate-x-[45%] rotate-[7deg] translate-y-[15%] group-hover:translate-y-[-5%] group-hover:translate-x-[-55%] group-hover:rotate-[14deg]"
      >
        <VideoFrame imageUrl="https://res.cloudinary.com/dum2lqmke/image/upload/v1691791709/image-lemarais_u4ta0p.jpg" />
      </PanelItem>
    </>
  );
};

export const PhotoItems = ({ idx }: PanelItemsProps) => {
  return (
    <>
      <PanelItem
        idx={idx}
        className="w-[30%] translate-x-[70%] rotate-[10deg] translate-y-[30%] group-hover:translate-y-[10%] group-hover:translate-x-[85%] group-hover:rotate-[20deg]"
      >
        <Polaroid imageUrl="https://res.cloudinary.com/dum2lqmke/image/upload/v1692224376/landing-photo-kimmich_muikpv.png" />
      </PanelItem>
      <PanelItem
        idx={idx}
        className="w-[30%] translate-x-[0%] rotate-[5deg] translate-y-[5%] group-hover:translate-y-[-15%]  group-hover:rotate-[10deg]"
      >
        <Polaroid imageUrl="https://res.cloudinary.com/dum2lqmke/image/upload/v1691791930/landing-photo-matip_f20xw4.png" />
      </PanelItem>
      <PanelItem
        idx={idx}
        className="w-[30%] -translate-x-[70%] -rotate-[10deg] translate-y-[20%] group-hover:translate-y-[0%] group-hover:-translate-x-[85%] group-hover:-rotate-[20deg]"
      >
        <Polaroid imageUrl="https://res.cloudinary.com/dum2lqmke/image/upload/v1691791926/landing-photo-snow_h1fxis.png" />
      </PanelItem>
    </>
  );
};

export const BlogItems = async ({ idx }: PanelItemsProps) => {
  const res = await getBlogposts();
  let blogPosts = [];
  blogPosts = res.data?.blogPostCollection.items;
  return (
    <>
      <PanelItem
        idx={idx}
        className="w-[40%] md:w-[40%] translate-x-[45%] -rotate-[5deg] translate-y-[30%] group-hover:translate-y-[0%] group-hover:translate-x-[55%] group-hover:rotate-[-10deg]"
      >
        <BlogNote title={blogPosts[0].title || 'Product Analytics 101'} />
      </PanelItem>
      <PanelItem
        idx={idx}
        className="w-[40%] md:w-[40%] translate-x-[0%] -rotate-[3deg] -translate-y-[30%] group-hover:-translate-y-[60%] group-hover:rotate-[-6deg]"
      >
        <BlogNote title={blogPosts[1].title || 'The Experimentation Pyramid'} />
      </PanelItem>
      <PanelItem
        idx={idx}
        className="w-[40%] md:w-[40%] -translate-x-[45%] rotate-[10deg] translate-y-[30%] group-hover:translate-y-[0%] group-hover:-translate-x-[55%] group-hover:rotate-[20deg]"
      >
        <BlogNote title={blogPosts[2].title || 'Product Engineering'} />
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
        className="w-1/2 translate-x-1/3 rotate-[10deg] translate-y-[15%] group-hover:translate-y-[0%] group-hover:translate-x-[45%] group-hover:rotate-[20deg]"
        idx={idx}
      >
        <OptimizedImage
          src="https://res.cloudinary.com/dum2lqmke/image/upload/v1691792149/landing-code-laptop-1_aip0nw.png"
          steps={[300, 400]}
        />
      </PanelItem>
      <PanelItem
        className="w-1/2 -translate-x-1/3 -rotate-[7deg] translate-y-[20%] group-hover:translate-y-[0%] group-hover:rotate-[-14deg] group-hover:translate-x-[-45%]"
        idx={idx}
      >
        <OptimizedImage
          src="https://res.cloudinary.com/dum2lqmke/image/upload/v1691792149/landing-code-laptop-2_ln921f.png"
          steps={[300, 400]}
        />
      </PanelItem>
      <PanelItem
        className="w-1/6 -rotate-[4deg] translate-y-[10%] group-hover:translate-y-[-10%] group-hover:rotate-[-8deg]"
        idx={idx}
      >
        <OptimizedImage
          src="https://res.cloudinary.com/dum2lqmke/image/upload/v1691792149/landing-code-iphone_rmlypq.png"
          steps={[150, 200]}
        />
      </PanelItem>
    </>
  );
};
