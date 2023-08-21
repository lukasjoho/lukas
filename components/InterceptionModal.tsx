'use client';
import { easeInOutCubic } from '@/lib/easing';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import React, {
  FC,
  MouseEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

interface InterceptionModalProps {
  children: React.ReactNode;
  title?: string;
  isCenterModal?: boolean;
}

const InterceptionModal: FC<InterceptionModalProps> = ({
  children,
  title,
  isCenterModal = true,
}) => {
  const router = useRouter();
  const overlay = useRef(null);
  const dialog = useRef(null);
  const x = useRef(null);
  const xMob = useRef(null);
  const [show, setShow] = useState(true);

  const onDismiss = useCallback(() => {
    setShow(false);
    setTimeout(() => {
      router.back();
    }, 300);
  }, [router]);

  const handleClick: MouseEventHandler = useCallback(
    (e) => {
      console.log('CLICKED', e.target, xMob.current);
      e.stopPropagation();
      if (
        e.target === overlay.current ||
        e.target === dialog.current ||
        e.target === x.current ||
        e.target === xMob.current
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
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [onKeyDown]);

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
      className="fixed w-screen h-screen top-0 left-0 bg-dark/95 backdrop-blur-sm z-50"
      key="overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.1, ease: 'easeInOut' }}
    >
      <div className="hidden md:block">
        <CloseModalX
          customRef={x}
          handleClick={handleClick}
          className="absolute top-4 right-4 group cursor-pointer z-10"
        />
        <div
          className={cn(
            'absolute w-screen h-screen top-0 left-0 flex items-center justify-center overflow-scroll cursor-pointer',
            !isCenterModal && 'items-start pt-32 pb-32'
          )}
          onClick={handleClick}
          ref={overlay}
        >
          <motion.div
            ref={dialog}
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            key={'hellokey'}
            className="cursor-default"
          >
            {children}
          </motion.div>
        </div>
      </div>
      <AnimatePresence>
        {show && (
          <motion.div
            className="bg-white absolute bottom-0 overflow-hidden flex flex-col rounded-t-lg md:hidden"
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
              <CloseModalX
                customRef={xMob}
                handleClick={handleClick}
                fill="#1e1e1e"
                className="group cursor-pointer z-10"
              />
            </div>
            <div className="overflow-scroll grow">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default InterceptionModal;

interface CloseModalXProps extends React.HTMLProps<HTMLDivElement> {
  customRef: any;
  handleClick: any;
  fill?: string;
}

const CloseModalX: FC<CloseModalXProps> = ({
  customRef,
  handleClick,
  fill = 'white',
  ...props
}) => {
  return (
    <div
      ref={customRef}
      className={props.className}
      onClick={(e: any) => handleClick(e)}
    >
      <svg
        width="206"
        height="206"
        viewBox="0 0 206 206"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 group-hover:rotate-90 transition duration-300"
        style={{ pointerEvents: 'none' }}
      >
        <rect
          x="49.9668"
          y="27.7539"
          width="180"
          height="30"
          rx="15"
          transform="rotate(45 49.9668 27.7539)"
          fill={fill}
        />
        <rect
          x="28.7539"
          y="155.033"
          width="180"
          height="30"
          rx="15"
          transform="rotate(-45 28.7539 155.033)"
          fill={fill}
        />
      </svg>
    </div>
  );
};
