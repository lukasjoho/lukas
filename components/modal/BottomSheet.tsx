'use client';
import { easeInOutCubic } from '@/lib/constants';
import { motion } from 'framer-motion';
import { FC } from 'react';
import CloseModalButton from './CloseModalButton';

interface BottomSheetProps {
  xMob: any;
  handleClick: any;
  title: string | undefined;
  children: React.ReactNode;
}

export const BottomSheet: FC<BottomSheetProps> = ({
  title,
  xMob,
  handleClick,
  children,
}) => {
  const sheetVariants = {
    hidden: (h: any) => ({
      y: '90dvh',
    }),
    visible: {
      y: 0,
    },
  };
  return (
    <motion.div
      className="bg-white absolute bottom-0 overflow-hidden flex flex-col rounded-t-lg w-full"
      style={{ maxHeight: '94dvh' }}
      variants={sheetVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      key="sheet"
      transition={{ duration: 0.3, ease: easeInOutCubic }}
    >
      <div className="flex justify-between relative bg-white px-3 py-4 border-b border-muted/10 shrink-0 rounded-t-lg items-center">
        <h1 className="font-meche text-2xl">{title}</h1>
        <CloseModalButton
          customRef={xMob}
          handleClick={handleClick}
          fill="#1e1e1e"
          className="group cursor-pointer z-10"
        />
      </div>
      <div className="overflow-scroll grow flex flex-col items-center py-16">
        {children}
      </div>
    </motion.div>
  );
};
