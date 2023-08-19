import { FC } from 'react';

interface BlogNoteProps extends React.HTMLProps<HTMLDivElement> {
  title: string;
}

export const BlogNote: FC<BlogNoteProps> = ({ title }: any) => {
  return (
    <div className=" bg-[#F3F3F3] px-4 3xl:px-8 text-center py-6 md:py-8 lg:py-14 xl:py-20 relative overflow-hidden grid items-center shadow-md">
      <div className="space-y-4 md:space-y-7 absolute left-0 top-0 w-full">
        <div>
          <div className="w-full flex justify-end px-2 py-1">
            <span className="text-[#999999] text-xxs md:text-xs xl:text-base mr-1">
              Date
            </span>
            <span className="font-fingerpaint text-xxs md:text-xs xl:text-base">
              09/23
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
      <h2 className="relative z-10 font-fingerpaint text-xxs md:text-sm xl:text-lg">
        {title}
      </h2>
    </div>
  );
};

const Line = () => <div className="h-[1px] w-full bg-[#C7CBD6] blur-[1px]" />;
