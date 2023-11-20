import Title from '@/components/shared/Title';
import Link from 'next/link';
import { FC } from 'react';

interface PanelProps {
  title: string;
  href: string;
  children: React.ReactNode;
}

const Panel: FC<PanelProps> = ({ children, title, href }) => {
  return (
    <Link href={href} className="cursor">
      <div className="cursor group relative flex h-full min-h-[240px] flex-col items-center justify-between overflow-hidden rounded-xl bg-lightgrey pt-12 transition duration-150 hover:bg-lightgreydark md:min-h-[260px] md:rounded-2xl md:pt-14 lg:min-h-[320px] xl:min-h-[480px] xl:pt-20">
        <Title as="h1" className="text-2xl font-normal md:text-4xl xl:text-5xl">
          {title}
        </Title>
        <div className="relative flex w-[180%] flex-col items-center md:w-[70%] xl:w-[80%]">
          {children}
        </div>
      </div>
    </Link>
  );
};

export default Panel;
