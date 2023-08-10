'use client';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const SwiperGallery = ({ images }: any) => {
  return (
    <Swiper
      spaceBetween={20}
      direction="horizontal"
      slidesPerView={2}
      observer={true}
      observeParents={true}
      loop={false}
      centeredSlides={false}
      pagination={{ clickable: true }}
      // onSlideChange={swiper => swiper.slideTo(0)}
      onSwiper={(swiper) => swiper.setProgress(-0)}
      mousewheel={true}
      grabCursor={true}
      keyboard={{
        enabled: true,
      }}
    >
      {/* {images.map((image: any) => (
        <SwiperSlide>
          <div className="relative aspect-square h-[400px] bg-red-500"></div>
        </SwiperSlide>
      ))} */}
      <SwiperSlide>
        <div className="relative aspect-square h-[400px] w-[400px] bg-red-500">
          1
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative aspect-square h-[400px]  w-[400px] bg-red-500">
          2
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative aspect-square h-[400px] w-[400px]  bg-red-500">
          3
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative aspect-square h-[400px] w-[400px] bg-red-500">
          4
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative aspect-square h-[400px] w-[400px] bg-red-500">
          5
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperGallery;
