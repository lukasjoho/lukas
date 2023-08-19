'use client';
import { motion } from 'framer-motion';
import CloudImage from './CloudinaryImage';

const Avatar = () => {
  return (
    <motion.div
      initial={{ transform: 'scale(0)' }}
      animate={{ transform: 'scale(1)' }}
      transition={{
        duration: 0.6,
        ease: [0.87, 0, 0.13, 1],
      }}
      className="bg-lightgrey w-[120px] md:w-[200px] rounded-full border-8 md:border-[16px] border-white aspect-square overflow-hidden group"
    >
      <div className="transition duration-300 hover:scale-110">
        <div className="group-hover:hidden">
          <CloudImage
            src={
              'https://res.cloudinary.com/dum2lqmke/image/upload/v1691759882/landing-photo-lukas_ka01ye.jpg'
            }
          />
        </div>
        <div className="hidden group-hover:block">
          <CloudImage
            src={
              'https://res.cloudinary.com/dum2lqmke/image/upload/v1692289993/landing-photo-lukas-dark_xaqgzy.jpg'
            }
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Avatar;
