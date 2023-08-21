'use client';
import { cn } from '@/lib/utils';
import { FC, useContext } from 'react';
import { MenuContext } from '../Header';
import { Icons } from '../Icons';

export const SocialIcons = () => {
  return (
    <div className="flex gap-2">
      <SocialIcon type="mail" href="mailto:mail@lukashoppe.com" />
      <SocialIcon type="twitter" href="https://twitter.com/lukasjoho" />
      <SocialIcon type="github" href="https://github.com/lukasjoho" />
      <SocialIcon
        type="youtube"
        href="https://www.youtube.com/channel/UCSePudpZ9upO0exjh9uuh9w"
      />
    </div>
  );
};

interface SocialIconProps {
  type: 'youtube' | 'github' | 'twitter' | 'mail' | 'linkedin';
  href: string;
}

const SocialIcon: FC<SocialIconProps> = ({ type, href }) => {
  const { isOpen, setIsOpen }: any = useContext(MenuContext);
  const IconComponent = Icons[type] as React.ComponentType<{
    className?: string;
  }>;
  if (!IconComponent) {
    return null; // Return null or an error message for unsupported icon types
  }
  return (
    <a href={href} target="_blank">
      <IconComponent
        className={cn(
          'w-6 h-6 fill-muted transition duration-200 ',
          isOpen ? 'hover:fill-white' : 'hover:fill-dark'
        )}
      />
    </a>
  );
};
