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

interface InterceptionModalProps {
  children: React.ReactNode;
  title?: string;
  isCenter?: boolean;
}

const InterceptionModal: FC<InterceptionModalProps> = ({
  children,
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

  return (
    <>
      <AnimatePresence>
        {show && (
          <div
            className={cn(
              'fixed top-0 left-0 w-screen h-screen z-50 overflow-scroll flex items-start py-16',
              isCenter && 'py-0 items-center'
            )}
          >
            <motion.div
              ref={overlay}
              className="fixed w-full h-full top-0 left-0 bg-dark/95 backdrop-blur-sm"
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              onClick={handleClick}
            />
            <div className="md:hidden">
              <BottomSheet title={title} xMob={xMob} handleClick={handleClick}>
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
