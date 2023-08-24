'use client';
import OptimizedImage from '@/components/shared/OptimizedImage';
import { isServer } from '@/lib/utils';
import { Variants, motion } from 'framer-motion';

const Avatar = () => {
  let avatarVariants: Variants = {
    hidden: {
      transform: 'scale(0)',
    },
    visible: {
      transform: 'scale(1)',
    },
  };
  const isLoaded = isServer() ? false : sessionStorage.getItem('isLoaded');
  if (isLoaded === 'true') {
    avatarVariants = {
      hidden: {
        transform: 'scale(1)',
      },
      visible: {
        transform: 'scale(1)',
      },
    };
  }
  return (
    <motion.div
      variants={avatarVariants}
      initial="hidden"
      animate="visible"
      transition={{
        type: 'spring',
      }}
      className="bg-lightgrey w-[120px] md:w-[200px] xl:w-[240px] rounded-full border-[12px] md:border-[16px] border-white aspect-square overflow-hidden group"
    >
      <div className="transition duration-300 hover:scale-110 relative w-full h-full">
        <div className="absolute left-0 top-0 w-full h-full opacity-100">
          <OptimizedImage
            src={
              'https://res.cloudinary.com/dum2lqmke/image/upload/v1692881004/lukas_nwme8k.jpg'
            }
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Avatar;
