import { formatDate } from '@/lib/helper';
import { FC } from 'react';
import BackLink from './BackLink';

interface ArticleHeaderProps extends React.HTMLProps<HTMLDivElement> {
  title: string;
  tagline: string;
  backlink: string;
  date?: string;
}

export const ArticleHeader: FC<ArticleHeaderProps> = ({
  title,
  tagline,
  backlink,
  date,
}) => {
  return (
    <div className="mb-3 md:mb-6 space-y-2">
      <BackLink href={backlink} label="Back to all" />
      <h1 className="font-meche font-medium text-4xl">{title}</h1>
      <h2 className="text-muted text-xl">{tagline}</h2>
      {date && <div className="font-medium">{formatDate(date)}</div>}
    </div>
  );
};
