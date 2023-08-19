import React, { FC } from 'react';

interface PageTitleProps {
  children: React.ReactNode;
}

const PageTitle: FC<PageTitleProps> = ({ children }) => {
  return (
    <h1 className="text-dark text-3xl md:text-4xl xl:max-w-[70%] font-meche">
      {children}
    </h1>
  );
};

export default PageTitle;
