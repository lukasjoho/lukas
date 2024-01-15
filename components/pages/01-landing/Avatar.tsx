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
      className="group aspect-square w-[140px] overflow-hidden rounded-full border-[16px] border-white bg-lightgrey md:w-[200px] md:border-[16px] xl:w-[240px]"
    >
      <div className="relative h-full w-full transition duration-300 hover:scale-110">
        <div className="absolute left-0 top-0 h-full w-full opacity-100">
          <OptimizedImage
            src={
              'https://res.cloudinary.com/du3mz9iny/image/upload/v1704726742/lukas_dark_new_zxhvg3.jpg'
            }
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Avatar;
