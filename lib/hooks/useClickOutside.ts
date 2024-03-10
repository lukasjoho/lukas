import { useCallback, useEffect } from 'react';

function checkIfElementInsideSlider(child: Node) {
  let el = child.parentElement;
  while (el !== null) {
    if (el.classList.contains('swiper-wrapper')) {
      return true;
    }
    el = el.parentElement;
  }
  return false;
}

export const useClickOutside = (ref: any, callback: any) => {
  const handleClick = useCallback(
    (e: any) => {
      if (ref.current) {
        const isInside = checkIfElementInsideSlider(e.target);

        if (!isInside) {
          callback(e);
        }
        return;
      }
    },
    [ref, callback]
  );
  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  });
};
