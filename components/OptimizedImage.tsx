'use client';
import { getCloudinaryImage } from '@/lib/cloudinary';
import {
  AdvancedImage,
  lazyload,
  placeholder,
  responsive,
} from '@cloudinary/react';
import { FC } from 'react';

interface OptimizedImageProps {
  src: string;
  steps?: number[];
}

const OptimizedImage: FC<OptimizedImageProps> = ({ src, steps }) => {
  return (
    <AdvancedImage
      width="100%"
      height="100%"
      style={{ objectFit: 'cover' }}
      cldImg={getCloudinaryImage(src)}
      plugins={[lazyload(), responsive({ steps }), placeholder()]}
    />
  );
};

export default OptimizedImage;
