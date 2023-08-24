'use client';
import { cn } from '@/lib/utils';
import { AnimatePresence, Variants, motion } from 'framer-motion';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { FC, useCallback, useContext, useEffect, useRef } from 'react';
import animationDataDark from '../../public/assets/animation_round_1e1e1e.json';
import animationDataWhite from '../../public/assets/animation_round_ffffff.json';
import { MenuContext } from './Header';

const Menu = () => {
  const menuRef1 = useRef<LottieRefCurrentProps>(null);
  const menuRef2 = useRef<LottieRefCurrentProps>(null);
  const { isOpen, setIsOpen }: any = useContext(MenuContext);

  const handleKeyDown = (e: any) => {
    if (e.keyCode == 27) {
      setIsOpen(false);
    }
  };

  const onDismiss = useCallback(() => {
    setIsOpen(false);
  }, []);

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

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const firstUpdate = useRef(true);
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    if (isOpen) {
      menuRef1.current?.playSegments([0, 28], true);
      menuRef2.current?.playSegments([0, 28], true);
    } else {
      menuRef1.current?.playSegments([28, 56], true);
      menuRef2.current?.playSegments([28, 56], true);
    }
  }, [isOpen]);
  const handleMenuClick = () => {
    setIsOpen((isOpen: any) => !isOpen);
  };

  const menucontainer: Variants = {
    show: {
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.04,
      },
    },
  };

  const overlayVariants: Variants = {
    collapsed: {
      height: 0,
    },
    expanded: {
      height: 400,
    },
  };

  return (
    <div onKeyDown={handleKeyDown}>
      <div
        className="h-6 w-6 relative cursor-pointer grid items-center"
        onClick={handleMenuClick}
      >
        <Lottie
          animationData={animationDataDark}
          lottieRef={menuRef1}
          loop={false}
          autoplay={false}
          style={{
            transform: 'scale(1.5)',
            position: 'absolute',
            opacity: isOpen ? 0 : 1,
          }}
        />
        <Lottie
          animationData={animationDataWhite}
          lottieRef={menuRef2}
          loop={false}
          autoplay={false}
          style={{
            transform: 'scale(1.5)',
            position: 'absolute',
            opacity: isOpen ? 1 : 0,
          }}
        />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.3,
              ease: [0.74, 0, 0.19, 1.02],
            }}
            className="-z-10 w-screen h-screen fixed left-0 top-0 bg-dark text-white font-meche font-medium text-3xl text-center grid items-center"
          >
            <nav>
              <motion.ul
                className="space-y-4"
                variants={menucontainer}
                initial="hidden"
                animate="show"
              >
                <NavItem href="/">home</NavItem>
                <NavItem href="/code">code</NavItem>
                <NavItem href="/photo">photo</NavItem>
                <NavItem href="/video">video</NavItem>
                <NavItem href="/blog">blog</NavItem>
                <NavItem href="/about">about</NavItem>
              </motion.ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Menu;

interface NavItemProps {
  children: React.ReactNode;
  href: string;
}

const NavItem: FC<NavItemProps> = ({ children, href }) => {
  const pathname = usePathname();
  const isActive = pathname == href;
  const { setIsOpen }: any = useContext(MenuContext);

  const handleClose = () => {
    setIsOpen(false);
  };

  const menuitem = {
    hidden: { y: 10, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <motion.li onClick={handleClose} variants={menuitem} key={href}>
      <Link
        href={href}
        className={cn(
          'text-4xl grow grid items-center text-muted transition duration-150 hover:text-white cursor-pointer',
          isActive && 'text-white'
        )}
      >
        {children}
      </Link>
    </motion.li>
  );
};
