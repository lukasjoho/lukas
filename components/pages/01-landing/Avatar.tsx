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
  // const [shouldAnimate, setShouldAnimate] = useState<null | string>();
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
      className="bg-lightgrey w-[120px] md:w-[200px] rounded-full border-[8px] md:border-[16px] border-white aspect-square overflow-hidden group"
    >
      <div className="transition duration-300 hover:scale-110 relative w-full h-full">
        <div className="absolute left-0 top-0 w-full h-full opacity-100 group-hover:opacity-0">
          <OptimizedImage
            src={
              'https://res.cloudinary.com/dum2lqmke/image/upload/v1691759882/landing-photo-lukas_ka01ye.jpg'
            }
          />
        </div>
        <div className="absolute left-0 top-0 w-full h-full opacity-0 group-hover:opacity-100">
          <OptimizedImage
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
