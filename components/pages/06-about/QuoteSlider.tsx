'use client';
import Container from '@/components/layout/Container';
import { cn } from '@/lib/utils';
import { ArrowBigLeft, ArrowBigRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { useCallback, useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Keyboard } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import quotes from './quotes.json';

type TQuote = {
  text: string;
  author: string;
  url?: string;
};

const QuoteSlider = () => {
  const sliderRef = useRef<any>(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);
  const [isStart, setIsStart] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  return (
    <Container>
      <div className="relative overflow-hidden rounded-xl bg-lightgrey md:rounded-2xl">
        <Swiper
          modules={[Keyboard]}
          ref={sliderRef}
          spaceBetween={50}
          slidesPerView={1.5}
          centeredSlides={true}
          keyboard
          onSlideChange={(swiper) => {
            swiper.isBeginning ? setIsStart(true) : setIsStart(false);
            swiper.isEnd ? setIsEnd(true) : setIsEnd(false);
          }}
        >
          {quotes.map((quote: TQuote) => {
            return (
              <SwiperSlide
                className="self-center py-16 md:py-24"
                key={quote.text}
              >
                <Quote quote={quote} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <Gradient direction="ltr" />
        <Gradient direction="rtl" />
        <div className="absolute bottom-4 right-4 z-10 flex gap-2">
          <NavigationButton disabled={isStart} onClick={handlePrev}>
            <ArrowBigLeft />
          </NavigationButton>
          <NavigationButton disabled={isEnd} onClick={handleNext}>
            <ArrowBigRight />
          </NavigationButton>
        </div>
      </div>
    </Container>
  );
};

interface GradientProps {
  direction?: 'ltr' | 'rtl';
}

const Gradient = ({ direction = 'ltr' }: GradientProps) => {
  return (
    <div
      className={cn(
        'absolute top-0 z-10 h-full w-16 from-lightgrey  to-transparent md:w-64',
        direction === 'rtl'
          ? 'left-0 bg-gradient-to-r'
          : 'right-0 bg-gradient-to-l'
      )}
    ></div>
  );
};

interface NavigationButtonProps extends React.HTMLProps<HTMLButtonElement> {
  onClick: () => void;
  children: React.ReactNode;
}

const NavigationButton = ({ onClick, children, ...props }: any) => {
  return (
    <button
      className={cn(
        'grid aspect-square h-10 cursor-pointer place-items-center rounded-full bg-dark text-lg text-white opacity-90 transition duration-150 ',
        props.disabled && 'opacity-5',
        !props.disabled && 'hover:opacity-100'
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

interface QuoteProps {
  quote: TQuote;
}

const Quote = ({ quote }: QuoteProps) => {
  const { text, author, url } = quote;
  const lines = text.split('\n');
  const textJSX = lines.map((line: string, index: number) => {
    return (
      <>
        {line}
        {index !== lines.length - 1 && <br />}
      </>
    );
  });
  return (
    <div className="relative h-full space-y-2 text-center">
      {url && (
        <Link
          href={url}
          className="absolute -top-1 left-1/2 grid h-8 w-8 -translate-x-1/2 -translate-y-[100%] place-items-center rounded-lg text-muted transition duration-100 hover:bg-muted/5 hover:text-dark"
        >
          <ExternalLink className="h-5 w-5" />
        </Link>
      )}
      <p className="relative font-mackinac text-lg leading-9 md:text-2xl">
        <span className="mr-1 text-xl md:text-3xl">&ldquo;</span>
        {textJSX}
        <span className="ml-1 text-xl md:text-3xl">&rdquo;</span>
      </p>
      <p className="absolute -bottom-2 left-1/2 -translate-x-1/2 translate-y-[100%] text-muted">
        {author}
      </p>
    </div>
  );
};

export default QuoteSlider;
