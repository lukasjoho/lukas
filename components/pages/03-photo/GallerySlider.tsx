'use client';
import OptimizedImage from '@/components/shared/OptimizedImage';
import Title from '@/components/shared/Title';
import { ContentfulPhoto } from '@/lib/types';
import 'swiper/css';
import 'swiper/css/keyboard';
import 'swiper/css/mousewheel';
import 'swiper/css/navigation';
import { Keyboard, Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

interface GallerySliderProps {
  id: string;
  title: string;
  photos: ContentfulPhoto[];
  cover: ContentfulPhoto;
}

const GallerySlider = ({ id, title, cover, photos }: GallerySliderProps) => {
  return (
    <div className="relative flex w-full grow flex-col gap-3 overflow-hidden pb-4 pt-3">
      <Title as="h2" className="shrink-0 text-center text-3xl">
        {title}
      </Title>
      <Swiper
        id="gallery"
        key={id}
        modules={[Keyboard, Mousewheel]}
        spaceBetween={16}
        centeredSlides={true}
        slidesPerView={'auto'}
        keyboard
        className="w-full grow"
        mousewheel={{
          sensitivity: 5,
        }}
      >
        <SwiperSlide
          className="h-full"
          style={{
            width: 'auto',
          }}
          key={0}
        >
          {/* <Image
            key={cover.sys.id}
            src={cover.url}
            alt=""
            width={cover.width}
            height={cover.height}
            className="h-full w-auto"
          /> */}
          <OptimizedImage
            key={cover.sys.id}
            src={cover.url}
            style={{
              width: '100%',
              height: '100%',
            }}
          />
        </SwiperSlide>
        {photos.map((photo, index) => {
          const {
            sys: { id },
            url,
            width,
            height,
          } = photo;
          return (
            <SwiperSlide
              className="h-full overflow-visible"
              style={{
                width: 'auto',
              }}
              key={index + 1}
            >
              {/* <Image
                key={photo.sys.id}
                src={photo.url}
                alt=""
                width={width}
                height={height}
                className="h-full w-auto"
              /> */}
              <OptimizedImage
                key={photo.sys.id}
                src={photo.url}
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default GallerySlider;
