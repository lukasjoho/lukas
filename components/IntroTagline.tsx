import React, { FC } from 'react';

interface IntroTaglineProps {
  children: React.ReactNode;
}

const IntroTagline: FC<IntroTaglineProps> = ({ children }) => {
  return (
    <div>
      <h1 className="text-dark text-xl md:text-4xl xl:max-w-[70%] font-meche">
        {children}
      </h1>
    </div>
  );
};

export default IntroTagline;
