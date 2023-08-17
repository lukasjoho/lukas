import { formatDate } from '@/lib/helper';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';

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
      <Link href={backlink}>
        <div className="text-muted flex items-center gap-1 mb-6 md:mb-12 hover:text-dark transition duration-100 text-sm">
          <ArrowLeft className="w-4 h-4" />
          Back to all
        </div>
      </Link>
      <h1 className="font-meche font-medium text-4xl">{title}</h1>
      <h2 className="text-muted text-xl">{tagline}</h2>
      {/* <h2 className="text-muted text-lg">{tagline}</h2> */}
      {date && <div className="font-medium">{formatDate(date)}</div>}
    </div>
  );
};
