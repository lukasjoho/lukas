'use client';
import { AnimatePresence } from 'framer-motion';
import React, { FC } from 'react';

interface ModalContainerProps {
  children: React.ReactNode;
}

const ModalProvider: FC<ModalContainerProps> = ({ children }) => {
  return <AnimatePresence>{children}</AnimatePresence>;
};

export default ModalProvider;
