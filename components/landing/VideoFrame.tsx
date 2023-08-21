import OptimizedImage from '../OptimizedImage';

export const VideoFrame = ({ imageUrl }: any) => {
  return (
    <div className="relative border-4 md:border-[8px] rounded-lg border-dark">
      <OptimizedImage src={imageUrl} steps={[130, 200, 300]} />
    </div>
  );
};
