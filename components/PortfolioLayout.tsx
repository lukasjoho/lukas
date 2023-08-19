import React, { FC } from 'react';
import BackLink from './BackLink';
import Container from './Container';
import IntroTagline from './PageTitle';

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
    <div className="space-y-8 md:space-y-16 pt-4 md:pt-8 ">
      <Container variant={variant} className="gap-4 md:gap-8">
        <BackLink href="/" label="Back to home" />
        <IntroTagline>{tagline}</IntroTagline>
      </Container>

      {children}
    </div>
  );
};

export default PortfolioLayout;
