import CloudImage from '../CloudinaryImage';

export const Polaroid = ({ imageUrl }: any) => {
  return (
    <div className="relative aspect-square w-full bg-gradient-to-tl from-[#f7f7f7] to-white flex flex-col items-center shadow-xl">
      <div className="absolute bottom-[8%] w-[84%]">
        <CloudImage src={imageUrl} steps={[300, 400]} />
      </div>
    </div>
  );
};
