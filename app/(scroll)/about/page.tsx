'use client';
import CloudImage from '@/components/CloudinaryImage';
import Container from '@/components/Container';
import PortfolioLayout from '@/components/PortfolioLayout';
import { cn } from '@/lib/utils';
import { FC } from 'react';

const AboutPage = () => {
  return (
    <div>
      <PortfolioLayout tagline="I am a product engineer. Before that I explored the world of product management. I like to capture moments through photography.">
        <Container>
          <div className="flex flex-col gap-32">
            <Flipper
              text="My career as a product builder actually began with a camera. Starting a video project from scratch and then capturing a story or vibe and composing that into something that sticks with viewers always was an exciting challenge. "
              imageUrl="https://res.cloudinary.com/dum2lqmke/image/upload/v1691967043/Screenshot_2023-08-14_at_00.50.02_bgqgjv.png"
            />
            <Flipper
              direction="reverse"
              text="From making videos it felt natural to also make sure that they are integrated as best as possible into interfaces and websites where they were used. Thats where I discovered web development for the first time and got absolutely hooked. "
              imageUrl="https://res.cloudinary.com/dum2lqmke/image/upload/v1691967648/image-usa_exd3vj.webp"
            />
            <Flipper
              text="After working as a product manager for 2 years I rediscovered the joy of implementation and tech and decided I want to focus all my energy into becoming a software engineer. Always here to talk and share ideas. You can easily get in touch via
              email."
              imageUrl="https://res.cloudinary.com/dum2lqmke/image/upload/v1691967648/image-lukas-berlin_kelw8v.webp"
            />
          </div>
        </Container>
      </PortfolioLayout>
    </div>
  );
};

export default AboutPage;

interface FlipperProps {
  text: string;
  imageUrl: string;
  direction?: 'normal' | 'reverse';
}

const Flipper: FC<FlipperProps> = ({
  text,
  imageUrl,
  direction = 'normal',
}) => {
  const splitText = text.split('.', 2);
  return (
    <div className="grid grid-cols-2 gap-32">
      <p className={cn('text-lg', direction == 'reverse' && 'order-last')}>
        {text}
      </p>
      <div>
        <CloudImage src={imageUrl} />
      </div>
    </div>
  );
};
