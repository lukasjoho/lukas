import Image from 'next/image';

interface PolaroidProps {
  image: string;
}

export const Polaroid = ({ image }: PolaroidProps) => {
  return (
    <div className="relative flex aspect-square w-full flex-col items-center bg-gradient-to-tl from-[#f7f7f7] to-white shadow-2xl">
      <div className="absolute bottom-[8%] w-[84%]">
        <Image
          src={image}
          alt=""
          className="w-full"
          width={378}
          height={500}
          sizes="(max-width: 768px) 100px, 300px"
        />
      </div>
    </div>
  );
};
