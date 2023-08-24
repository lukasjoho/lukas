import { getCloudinaryImage } from './clients/cloudinary';
import { Cover } from './types';

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