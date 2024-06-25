import { Cloudinary } from '@cloudinary/url-gen';

export const cld = new Cloudinary({
  cloud: {
    cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_ID,
  },
});

export const getCloudinaryImage = (url: string) => {
  const image = cld
    .image(url)
    .quality(60)
    .setDeliveryType('fetch')
    .format('auto')
    .addTransformation('dpr_2');
  return image;
};
