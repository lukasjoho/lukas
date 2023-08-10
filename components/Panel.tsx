import Link from 'next/link';
import React, { FC } from 'react';

interface PanelProps {
  title: string;
  emoji: string;
  href: string;
  image: string;
}

const Panel: FC<PanelProps> = ({ title, href, image }) => {
  return (
    <Link href={href}>
      <div className="bg-lightgrey transition duration-150 hover:bg-lightgreydark rounded-2xl min-h-[300px] pt-16 relative h-full overflow-hidden flex flex-col items-center">
        <h1 className="font-meche text-4xl text-center">{title}</h1>
        <img
          src={image}
          alt=""
          className="absolute w-[150%] md:w-2/4 bottom-0"
        />
      </div>
    </Link>
  );
};

export default Panel;
