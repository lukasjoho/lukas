import { useLayoutEffect, useState } from 'react';
import { isServer } from './utils';

export function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize]: any = useState({
    width: undefined,
    height: undefined,
  });

  useLayoutEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window?.innerWidth,
        height: window?.innerHeight - 100,
      });
    }

    // Add event listener
    window?.addEventListener('resize', handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window?.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  if (isServer()) {
    return;
  }
  return windowSize;
}
