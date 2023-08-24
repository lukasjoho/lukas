'use client';

import { BREAKPOINTS } from '@/lib/constants';
import Masonry from 'react-masonry-css';

const breakpointColumnsObj = {
  default: 4,
  [BREAKPOINTS.LG]: 3,
  [BREAKPOINTS.MD]: 2,
};

const MasonryLayout = ({ children, breakpoints }: any) => {
  return (
    <Masonry
      breakpointCols={breakpoints || breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {children}
    </Masonry>
  );
};

export default MasonryLayout;
