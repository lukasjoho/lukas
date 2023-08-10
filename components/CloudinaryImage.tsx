'use client';
import { getCloudinaryImage } from '@/lib/cloudinary';
import { AdvancedImage, responsive } from '@cloudinary/react';
import React, { FC } from 'react';

interface CloudinaryImageProps {
  src: string;
  steps?: number[];
}

const CloudImage: FC<CloudinaryImageProps> = ({ src, steps }) => {
  return (
    <AdvancedImage
      height="100% !important"
      width="100%"
      style={{ objectFit: 'cover', height: '100%' }}
      cldImg={getCloudinaryImage(src)}
      plugins={[responsive({ steps })]}
    />
  );
};

export default CloudImage;
