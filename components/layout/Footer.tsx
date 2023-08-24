import { cn } from '@/lib/utils';
import { FC } from 'react';
import { SocialIcons } from '../shared/SocialIcons';

interface FooterProps extends React.HTMLProps<HTMLDivElement> {}

const Footer: FC<FooterProps> = () => {
  return (
    <div
      className={cn('w-full border-t border-muted/10 flex justify-center py-4')}
    >
      <SocialIcons />
    </div>
  );
};

export default Footer;
