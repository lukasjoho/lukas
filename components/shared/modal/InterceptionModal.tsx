'use client';
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
import { BottomSheet } from './BottomSheet';
import CenterModal from './CenterModal';
import CloseModalButton from './CloseModalButton';

interface InterceptionModalProps {
  children: React.ReactNode;
  contentType?: 'photo' | 'video';
  title?: string;
  isCenter?: boolean;
}

const InterceptionModal: FC<InterceptionModalProps> = ({
  children,
  contentType,
  title,
  isCenter = false,
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

  return (
    <>
      <AnimatePresence>
        {show && (
          <div
            className={cn(
              'no-scrollbar fixed left-0 top-0 z-50 flex h-screen w-screen items-start overflow-scroll py-16',
              isCenter && 'items-center py-0'
            )}
          >
            <motion.div
              ref={overlay}
              className="fixed left-0 top-0 h-full w-full bg-dark/95 backdrop-blur-sm"
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              onClick={handleClick}
            >
              <CloseModalButton
                customRef={x}
                handleClick={handleClick}
                fill="white"
                className="group fixed right-4 top-4 hidden cursor-pointer md:block"
              />
            </motion.div>
            <div className="md:hidden">
              <BottomSheet
                title={title}
                xMob={xMob}
                handleClick={handleClick}
                contentType={contentType}
              >
                {children}
              </BottomSheet>
            </div>
            <CenterModal
              title={title}
              x={x}
              handleClick={handleClick}
              dialogRef={dialog}
              isCenter={isCenter}
            >
              {children}
            </CenterModal>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default InterceptionModal;
