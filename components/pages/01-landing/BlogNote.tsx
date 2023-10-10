import { formatDate } from '@/lib/helpers';
import { FC } from 'react';

interface BlogNoteProps extends React.HTMLProps<HTMLDivElement> {
  title: string;
  date: string;
}

export const BlogNote: FC<BlogNoteProps> = ({ title, date }) => {
  return (
    <div className=" 3xl:px-8 xl:py-18 relative grid items-center overflow-hidden bg-[#F3F3F3] px-4 py-8 text-center shadow-md md:py-6 lg:py-12">
      <div className="absolute left-0 top-0 w-full space-y-4 md:space-y-7">
        <div>
          <div className="flex w-full justify-end px-2 py-1">
            <span className="mr-1 text-xxs text-[#999999] md:text-xs xl:text-base">
              Date
            </span>
            <span className="font-fingerpaint text-xxs md:text-xs xl:text-base">
              {formatDate(date)}
            </span>
          </div>
          <Line />
        </div>
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
      </div>
      <h2 className="relative z-10 font-fingerpaint text-xxs md:text-xs lg:text-sm xl:text-lg">
        {title}
      </h2>
    </div>
  );
};

const Line = () => <div className="h-[1px] w-full bg-[#C7CBD6] blur-[1px]" />;
