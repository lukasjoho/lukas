import { Icons } from '@/components/shared/Icons';
import { FC } from 'react';

interface ItemOverlayProps {}

const YoutubeOverlay: FC<ItemOverlayProps> = () => {
  return (
    <div className="absolute left-0 top-0 hidden h-full w-full place-items-center bg-dark/70 px-4 text-white opacity-0 transition duration-300 hover:opacity-100 md:grid">
      <Icons.youtube3d className="w-16" />
    </div>
  );
};

export default YoutubeOverlay;
