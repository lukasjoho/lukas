import React, { FC } from 'react';
import IntroTagline from './IntroTagline';
import Container from './Container';

interface PortfolioLayoutProps {
  tagline: string;
  children: React.ReactNode;
  variant?: 'small' | 'medium' | 'normal' | 'large';
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
