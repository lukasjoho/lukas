import { motion } from 'framer-motion';
import React, { FC } from 'react';
import Container from '../layout/Container';

interface CenterModalProps {
  title: string | undefined;
  x: any;
  handleClick: any;
  children: React.ReactNode;
  dialogRef: any;
  isCenter: any;
}

const CenterModal: FC<CenterModalProps> = ({
  title,
  x,
  handleClick,
  children,
  dialogRef,
}) => {
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
    <Container variant="normal" className="hidden md:block">
      <motion.div
        ref={dialogRef}
        variants={variants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        key={'hellokey'}
        className="relative z-10 cursor-default w-full flex justify-center pointer-events-none"
      >
        {children}
      </motion.div>
    </Container>
  );
};

export default CenterModal;
