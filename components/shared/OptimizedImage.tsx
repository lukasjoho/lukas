'use client';
import { getCloudinaryImage } from '@/lib/clients/cloudinary';
import { AdvancedImage, responsive } from '@cloudinary/react';
import { CSSProperties, FC } from 'react';

interface OptimizedImageProps {
  src: string;
  steps?: number[];
  style?: CSSProperties;
}

const OptimizedImage: FC<OptimizedImageProps> = ({ src, steps, style }) => {
  return (
    <AdvancedImage
      width="100%"
      height="100%"
      style={{
        objectFit: 'cover',
        ...style,
      }}
      cldImg={getCloudinaryImage(src)}
      plugins={[responsive({ steps })]}
    />
  );
};

export default OptimizedImage;
