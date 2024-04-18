'use client';
import PrimaryLinkButton from '@/components/shared/PrimaryLinkButton';
import Title from '@/components/shared/Title';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Drawer, DrawerContent } from '@/components/ui/drawer';
import { useIsMobile } from '@/lib/hooks/useIsMobile';
import { CodeProjectDetailed } from '@/lib/types';
import debounce from 'lodash.debounce';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Balancer from 'react-wrap-balancer';

interface CodePageProps {
  project: CodeProjectDetailed;
}

const CodePageItem = ({ project }: CodePageProps) => {
  const { title, caption, cover, description, ctaLabel, ctaUrl } = project;
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const onClose = debounce(() => {
    router.back();
  }, 500);
  useEffect(() => {
    setOpen(true);
  }, []);

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setOpen(false);
      onClose();
    }
  };

  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Drawer open={open} onOpenChange={setOpen} onClose={onClose}>
        <DrawerContent
          style={{
            maxHeight: 'calc(100dvh - 32px)',
          }}
        >
          <div className="overflow-scroll px-4 pb-4">
            <Title className="text-3xl">{title}</Title>
            <Image
              className="mx-auto mt-2.5 aspect-[4/3] w-full max-w-[500px] rounded-lg object-cover object-bottom"
              src={cover.url}
              height={cover.height}
              width={cover.width}
              alt="projectimage"
              sizes="600px"
            />

            {ctaUrl && (
              <PrimaryLinkButton
                className="mt-4 w-full"
                href={ctaUrl as string}
                icon="ArrowUpRight"
                target="_blank"
              >
                {ctaLabel}
              </PrimaryLinkButton>
            )}
            <p className="mt-3">{description}</p>
          </div>
        </DrawerContent>
      </Drawer>
    );
  }
  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-[700px] p-6 lg:max-w-[1100px] lg:p-10  xl:max-w-[1600px]">
        <div className="grid grid-cols-12 gap-6 lg:gap-12">
          <div className="col-span-6 flex flex-col items-start justify-between">
            <div>
              <Title className="text-3xl lg:text-4xl">{title}</Title>
              <div className="text-sm text-muted">{caption}</div>
              <p className="mt-2 lg:text-lg">
                <Balancer>{description}</Balancer>
              </p>
            </div>
            {ctaUrl && (
              <div className="mt-3">
                <PrimaryLinkButton
                  href={ctaUrl as string}
                  icon="ArrowUpRight"
                  target="_blank"
                >
                  {ctaLabel}
                </PrimaryLinkButton>
              </div>
            )}
          </div>
          <Image
            className="col-span-6 aspect-[9/8] rounded-lg"
            src={cover.url}
            height={cover.height}
            width={cover.width}
            alt="projectimage"
            sizes="600px"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CodePageItem;
