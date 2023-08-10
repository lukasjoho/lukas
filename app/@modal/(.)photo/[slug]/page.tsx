import CloudImage from "@/components/CloudinaryImage";
import Container from "@/components/Container";
import InterceptionModal from "@/components/InterceptionModal";
import { getAlbum, getAlbums } from "@/lib/contentful";
import React from "react";
import ModalHeadline from "@/components/ModalHeadline";
import ModalImages from "@/components/ModalImages";

export async function generateStaticParams() {
  const res = await getAlbums();
  const galleries = res.data.galleryCollection.items;
  return galleries.map((gallery: any) => ({
    slug: gallery.slug,
  }));
}

const GalleryModal = async ({ params }: { params: { slug: string } }) => {
  const res = await getAlbum(params.slug);
  const album = res.data.galleryCollection.items[0];

  return (
    <InterceptionModal>
      <Container variant="normal">
        <div className="pb-8 text-white w-full">
          <ModalHeadline>{album.title}</ModalHeadline>
        </div>
        <ModalImages>
          <div className="flex flex-col gap-16 ">
            <CloudImage
              src={album.cover.url}
              steps={[400, 500, 600, 800, 1000]}
            />
            {album.imagesCollection.items.map((image: any) => (
              <CloudImage src={image.url} steps={[400, 500, 600]} />
            ))}
          </div>
        </ModalImages>
      </Container>
    </InterceptionModal>
  );
};

export default GalleryModal;
