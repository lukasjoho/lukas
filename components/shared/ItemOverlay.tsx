import { FC } from 'react';
import Title from './Title';

interface ItemOverlayProps {
  title: string;
  caption: string;
}

const ItemOverlay: FC<ItemOverlayProps> = ({ title, caption }) => {
  return (
    <div className="absolute left-0 top-0 hidden h-full w-full place-items-center bg-dark/70 px-4 text-white opacity-0 transition duration-300 hover:opacity-100 md:grid">
      <div>
        <Title className="text-center text-xl md:text-3xl">{title}</Title>
        <h3 className="absolute left-0 w-full text-center font-meche text-base text-white">
          {caption}
        </h3>
      </div>
    </div>
  );
};

export default ItemOverlay;
