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
      className="bg-lightgrey w-[120px] md:w-[200px] rounded-full border-8 md:border-[16px] border-white aspect-square overflow-hidden"
    >
      <CloudImage
        src={
          'https://res.cloudinary.com/dum2lqmke/image/upload/v1691759882/landing-photo-lukas_ka01ye.jpg'
        }
      />
    </motion.div>
  );
};

export default Avatar;
