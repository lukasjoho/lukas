import { FC } from 'react';
import { ArticleHeader } from './ArticleHeader';
import Container from './Container';
import RichTextRenderer from './RichTextRenderer';

interface ArticleLayoutProps {
  children?: React.ReactNode;
  title: string;
  tagline: string;
  date?: string;
  content?: any;
  backlink: string;
}

const ArticleLayout: FC<ArticleLayoutProps> = ({
  children,
  title,
  tagline,
  date,
  content,
  backlink,
}) => {
  return (
    <Container variant="small">
      <article className="flex flex-col w-full">
        <ArticleHeader
          title={title}
          tagline={tagline}
          date={date}
          backlink={backlink}
        />
        {children}
        {content && (
          <div className="relative">
            <RichTextRenderer json={content.json} links={content.links} />
          </div>
        )}
      </article>
    </Container>
  );
};

export default ArticleLayout;
