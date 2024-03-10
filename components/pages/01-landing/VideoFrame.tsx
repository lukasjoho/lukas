import Image from 'next/image';

interface VideoFrameProps {
  image: string;
}

export const VideoFrame = ({ image }: VideoFrameProps) => {
  return (
    <div className="relative h-auto w-full rounded-lg border-4 border-dark shadow-2xl md:border-[8px]">
      <Image
        src={image}
        alt=""
        width={1600}
        height={900}
        sizes="(max-width: 768px) 200px, 400px"
      />
    </div>
  );
};
