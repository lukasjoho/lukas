import BlogLayout from '@/components/pages/05-blog/BlogLayout';
import YoutubeGrid from '@/components/pages/05-blog/YoutubeGrid';

export const revalidate = 0;

const YoutubeVideosPage = () => {
  return (
    <BlogLayout>
      <YoutubeGrid />
    </BlogLayout>
  );
};

export default YoutubeVideosPage;
