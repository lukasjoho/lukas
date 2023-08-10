'use client';
import { useRouter } from 'next/navigation';
import React, {
  FC,
  MouseEventHandler,
  useCallback,
  useEffect,
  useRef,
} from 'react';
import { motion } from 'framer-motion';

interface InterceptionModalProps {
  children: React.ReactNode;
}

const InterceptionModal: FC<InterceptionModalProps> = ({ children }) => {
  const router = useRouter();
  const overlay = useRef(null);
  const dialog = useRef(null);
  const x = useRef(null);

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  const handleClick: MouseEventHandler = useCallback(
    (e) => {
      if (
        e.target === overlay.current ||
        e.target === dialog.current ||
        e.target === x.current
      ) {
        if (onDismiss) onDismiss();
      }
    },
    [onDismiss, overlay, dialog, x]
  );

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onDismiss();
      }
    },
    [onDismiss]
  );

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [onKeyDown]);
  return (
    <motion.div
      ref={overlay}
      key="overlay"
      className="fixed w-screen h-screen top-0 left-0 bg-dark/95 backdrop-blur-sm flex items-center justify-center overflow-scroll z-50"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.1, ease: 'easeInOut' }}
    >
      <div
        ref={x}
        className="absolute top-4 right-4 group cursor-pointer "
        onClick={handleClick}
      >
        <svg
          width="206"
          height="206"
          viewBox="0 0 206 206"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 group-hover:rotate-90 transition duration-300"
        >
          <rect
            x="49.9668"
            y="27.7539"
            width="180"
            height="30"
            rx="15"
            transform="rotate(45 49.9668 27.7539)"
            fill="white"
          />
          <rect
            x="28.7539"
            y="155.033"
            width="180"
            height="30"
            rx="15"
            transform="rotate(-45 28.7539 155.033)"
            fill="white"
          />
        </svg>
      </div>
      <div ref={dialog}>{children}</div>
    </motion.div>
  );
};

export default InterceptionModal;
