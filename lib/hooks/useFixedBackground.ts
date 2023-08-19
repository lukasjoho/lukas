import { useEffect } from 'react';

const useFixedBackground = (open: any) => {
  return useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    }
    if (!open) {
      document.body.style.overflow = 'unset';
    }
  }, [open]);
};

export default useFixedBackground;
