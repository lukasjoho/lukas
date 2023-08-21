'use client';
import { getCloudinaryImage } from '@/lib/cloudinary';
import { AdvancedImage, responsive } from '@cloudinary/react';
import { FC } from 'react';

interface OptimizedImageProps {
  src: string;
  steps?: number[];
}

const OptimizedImage: FC<OptimizedImageProps> = ({ src, steps }) => {
  return (
    <AdvancedImage
      height="100% !important"
      width="100%"
      style={{ objectFit: 'cover', height: '100%' }}
      cldImg={getCloudinaryImage(src)}
      plugins={[responsive({ steps })]}
      loading="lazy"
    />
  );
};

export default OptimizedImage;
