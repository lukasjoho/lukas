'use client';
import React, { FC } from 'react';
import { motion } from 'framer-motion';

interface ModalHeadlineProps {
  children: React.ReactNode;
}

const ModalHeadline: FC<ModalHeadlineProps> = ({ children }) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <motion.h1
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="font-meche font-medium text-5xl"
    >
      {children}
    </motion.h1>
  );
};

export default ModalHeadline;
