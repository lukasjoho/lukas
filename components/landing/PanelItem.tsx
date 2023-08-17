'use client';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { FC } from 'react';

interface PanelItemProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  idx: number;
}

export const PanelItem: FC<PanelItemProps> = ({ children, className, idx }) => {
  return (
    <div className={cn('absolute bottom-0 transition duration-300', className)}>
      <motion.div
        initial={{ transform: 'translateY(100%)' }}
        animate={{ transform: 'translateY(0%)' }}
        transition={{
          delay: 0.0 + 0.1 * idx,
          type: 'spring',
          // stiffness: 20,
          // damping: 15,
        }}
        whileHover="hover"
      >
        {children}
      </motion.div>
    </div>
  );
};
