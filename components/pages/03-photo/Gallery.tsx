'use client';
import Title from '@/components/shared/Title';
import { Drawer, DrawerContent } from '@/components/ui/drawer';
import { useIsMobile } from '@/lib/hooks/useIsMobile';
import { ContentfulPhoto } from '@/lib/types';
import debounce from 'lodash.debounce';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import GallerySlider from './GallerySlider';

interface GalleryDrawerProps {
  id: string;
  title: string;
  cover: ContentfulPhoto;
  photos: ContentfulPhoto[];
}

const Gallery = ({ id, title, cover, photos }: GalleryDrawerProps) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const onClose = debounce(() => {
    router.back();
  }, 500);
  useEffect(() => {
    setOpen(true);
  }, []);

  const isMobile = useIsMobile();

  const show = true;
  if (show) {
    return (
      <Drawer open={open} onOpenChange={setOpen} onClose={onClose}>
        <DrawerContent>Content</DrawerContent>
      </Drawer>
    );
  }

  return (
    <>
      {!isMobile && (
        <Drawer open={open} onOpenChange={setOpen} onClose={onClose}>
          <DrawerContent
            key="desktop-drawer"
            className="hidden md:flex"
            style={{
              height: 'calc(100dvh - 64px)',
            }}
          >
            <GallerySlider
              id={id}
              title={title}
              cover={cover}
              photos={photos}
            />
          </DrawerContent>
        </Drawer>
      )}
      {isMobile && (
        <Drawer open={open} onOpenChange={setOpen} onClose={onClose}>
          <DrawerContent
            key="mobile-drawer"
            className="gap-4 md:hidden"
            style={{
              maxHeight: 'calc(100dvh - 32px)',
            }}
          >
            <div className="grow space-y-4 overflow-scroll">
              <Title as="h2" className="text-center text-3xl">
                {title}
              </Title>
              <Image
                key={cover.sys.id}
                src={cover.url}
                alt=""
                width={cover.width}
                height={cover.height}
                sizes="500px"
              />
              {photos.map((photo) => {
                return (
                  <Image
                    key={photo.sys.id}
                    src={photo.url}
                    alt=""
                    width={photo.width}
                    height={photo.height}
                    className="w-full"
                    sizes="500px"
                  />
                );
              })}
            </div>
          </DrawerContent>
        </Drawer>
      )}
    </>
  );
};

export default Gallery;
