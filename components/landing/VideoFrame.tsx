import CloudImage from '../CloudinaryImage';

export const VideoFrame = ({ imageUrl }: any) => {
  return (
    <div className="relative border border-4 md:border-[8px] rounded-lg border-dark">
      <div className="overflow-hidden rounded-md">
        <CloudImage src={imageUrl} steps={[300, 400]} />
      </div>
    </div>
  );
};
