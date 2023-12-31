import { getCloudinaryImage } from './clients/cloudinary';
import { Cover, MetaDataData, MetaDataOptions } from './types';

export const formatDate = (inputDate: string) => {
  if (!inputDate) {
    return '';
  }
  const date = new Date(inputDate);
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString().slice(2);
  return `${month}/${year}`;
};

export const formatRatio = (fractionString: string | undefined) => {
  if (!fractionString) {
    return 16 / 9;
  }
  const [numerator, denominator] = fractionString.split('/');

  const decimalValue = parseInt(numerator) / parseInt(denominator);

  return decimalValue;
};

export const getPosterFromCover = (cover: Cover, aspectRatio: string) => {
  return getCloudinaryImage(cover.url)
    .addTransformation(`ar_${formatRatio(aspectRatio)},c_crop`)
    .toURL();
};

export const createMetaDataObject = (
  data: MetaDataData,
  options: MetaDataOptions
) => {
  const {
    title,
    description,
    imageUrl = 'https://res.cloudinary.com/dum2lqmke/image/upload/v1692958978/og-image_tssqjm.jpg',
    slug,
  } = data;
  const { type, path = '', gravity = '' } = options || {};
  const cloudinaryImageUrl = `https://res.cloudinary.com/dum2lqmke/image/fetch/q_75/f_auto/dpr_1/${gravity}${
    gravity && ','
  }c_fill,w_1200,h_627/${imageUrl}`;
  return {
    title: `${title} - Lukas Hoppe`,
    description,
    openGraph: {
      title,
      description,
      type,
      url: `${process.env.NEXT_PUBLIC_URL}${path}${slug && '/'}${slug}`,
      images: [
        {
          url: cloudinaryImageUrl,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      url: `${process.env.NEXT_PUBLIC_URL}${path}${slug && '/'}${slug}`,
      images: [cloudinaryImageUrl],
    },
  };
};

export default function slugify(text: string) {
  const convertedText = text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w-]+/g, '') // Remove all non-word chars
    .replace(/--+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
  return convertedText;
}
