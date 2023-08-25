import { FC } from 'react';

interface ItemOverlayProps {
  title: string;
  caption: string;
}

const ItemOverlay: FC<ItemOverlayProps> = ({ title, caption }) => {
  return (
    <div className="hidden md:grid absolute left-0 top-0 w-full h-full bg-dark/70 place-items-center opacity-0 hover:opacity-100 transition duration-300 px-4 text-white">
      <div>
        <h2 className="relative font-meche text-xl md:text-3xl text-center">
          {title}
        </h2>
        <h3 className="font-meche absolute w-full left-0 text-base font-light text-center text-white">
          {caption}
        </h3>
      </div>
    </div>
  );
};

export default ItemOverlay;
