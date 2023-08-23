'use client';
import { cn, isServer } from '@/lib/utils';
import { Variants, motion } from 'framer-motion';
import { FC } from 'react';

interface PanelItemProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  idx: number;
}

export const PanelItem: FC<PanelItemProps> = ({ children, className, idx }) => {
  let panelItemVariants: Variants = {
    hidden: {
      transform: 'translateY(100%)',
    },
    visible: {
      transform: 'translateY(0%)',
    },
  };
  const isLoaded = isServer() ? true : sessionStorage.getItem('isLoaded');
  if (isLoaded === 'true') {
    panelItemVariants = {
      hidden: {
        transform: 'translateY(0%)',
      },
      visible: {
        transform: 'translateY(0%)',
      },
    };
  }

  return (
    <div className={cn('absolute bottom-0 transition duration-300', className)}>
      <motion.div
        variants={panelItemVariants}
        initial="hidden"
        animate="visible"
        transition={{
          delay: 0.0 + 0.1 * idx,
          type: 'spring',
        }}
        whileHover="hover"
      >
        {children}
      </motion.div>
    </div>
  );
};
