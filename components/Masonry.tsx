"use client";

import React from "react";
import Masonry from "react-masonry-css";

const breakpointColumnsObj = {
  default: 4,
};

const MasonryLayout = ({ children }: any) => {
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {children}
    </Masonry>
  );
};

export default MasonryLayout;
