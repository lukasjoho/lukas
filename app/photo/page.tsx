import CloudImage from "@/components/CloudinaryImage";
import Container from "@/components/Container";
import MasonryLayout from "@/components/Masonry";
import PortfolioLayout from "@/components/PortfolioLayout";
import { getAlbums } from "@/lib/contentful";
import Link from "next/link";
import React from "react";

export const revalidate = 0;

const PhotosPage = async ({ modal }: any) => {
  const albums = await getAlbums();
  return (
    <PortfolioLayout
      tagline="With every camera click, I strive to explore souls, embed them into their environment and tell a story."
      variant="large"
    >
      <Container variant="large">
        <MasonryLayout>
          {albums.data.galleryCollection.items.map((item: any) => (
            <div>
              <Link href={`/photo/${item.slug}`}>
                {/* <img src={item.cover.url} alt="" /> */}
                <CloudImage src={item.cover.url} steps={[400, 500, 600]} />
              </Link>
            </div>
          ))}
        </MasonryLayout>
        {modal}
      </Container>
    </PortfolioLayout>
  );
};

export default PhotosPage;
