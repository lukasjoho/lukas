import React, { FC } from 'react';
import Container from './Container';
import IntroTagline from './IntroTagline';

interface PortfolioLayoutProps {
  tagline: string;
  children: React.ReactNode;
  variant?: 'small' | 'medium' | 'normal' | 'large' | 'fluid';
}

const PortfolioLayout: FC<PortfolioLayoutProps> = ({
  tagline,
  variant,
  children,
}) => {
  return (
    <div className="space-y-12 pt-8 pb-64">
      <Container variant={variant}>
        <IntroTagline>{tagline}</IntroTagline>
      </Container>
      {children}
    </div>
  );
};

export default PortfolioLayout;
