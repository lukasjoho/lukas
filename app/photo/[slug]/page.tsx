import { getAlbums, getBlogpost } from "@/lib/contentful";
import React from "react";

export async function generateStaticParams() {
  const res = await getAlbums();
  const galleries = res.data.galleryCollection.items;
  return galleries.map((gallery: any) => ({
    slug: gallery.slug,
  }));
}

const GalleryPage = async () => {
  return <div>Gallery</div>;
};

export default GalleryPage;
