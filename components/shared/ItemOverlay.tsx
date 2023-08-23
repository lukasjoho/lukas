import { FC } from 'react';

interface ItemOverlayProps {
  title: string;
}

const ItemOverlay: FC<ItemOverlayProps> = ({ title }) => {
  return (
    <div className="absolute left-0 top-0 w-full h-full bg-dark/70 grid place-items-center opacity-0 hover:opacity-100 transition duration-300 px-4">
      <h2 className="font-meche text-xl md:text-3xl text-center text-white">
        {title}
      </h2>
    </div>
  );
};

export default ItemOverlay;
