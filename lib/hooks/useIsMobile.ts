import { useEffect, useState } from 'react';
import { useWindowSize } from './useWindowSize';

export function useIsMobile(): boolean | null {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const windowSize = useWindowSize();
  useEffect(() => {
    if (typeof windowSize?.width === 'number') {
      setIsMobile(windowSize.width < 768);
    }
  }, [windowSize]);
  return isMobile;
}
