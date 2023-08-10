import { Cloudinary } from "@cloudinary/url-gen";

export const cld = new Cloudinary({
  cloud: {
    cloudName: "dum2lqmke",
  },
});

export const getCloudinaryImage = (url: string) => {
  const image = cld
    .image(url)
    .quality(60)
    .setDeliveryType("fetch")
    .format("auto")
    .addTransformation("dpr_2");
  return image;
};
