'use client';
import { useEffect } from 'react';

const ScrollStopper = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);
  return null;
};

export default ScrollStopper;
