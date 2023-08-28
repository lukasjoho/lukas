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
      <div className="group cursor bg-lightgrey transition duration-150 hover:bg-lightgreydark rounded-2xl min-h-[240px] md:min-h-[260px] lg:min-h-[300px] xl:min-h-[480px] pt-12 md:pt-14 3xl:pt-20 relative h-full overflow-hidden flex flex-col justify-between items-center">
        <Title as="h1" className="text-2xl md:text-4xl xl:text-5xl">
          {title}
        </Title>
        <div className="w-[180%] md:w-[70%] xl:w-[80%] relative flex flex-col items-center">
          {children}
        </div>
      </div>
    </Link>
  );
};

export default Panel;
