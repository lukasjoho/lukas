"use client";
import React, { FC } from "react";
import { motion } from "framer-motion";
import CloudImage from "./CloudinaryImage";

interface ModalImagesProps {
  children: React.ReactNode;
}

const ModalImages: FC<ModalImagesProps> = ({ children }) => {
  return (
    <motion.div
      className="bg-white rounded-2xl overflow-hidden w-full"
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      key={JSON.stringify(children)}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default ModalImages;

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
