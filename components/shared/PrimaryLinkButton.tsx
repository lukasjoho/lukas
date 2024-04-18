import { cn } from '@/lib/utils';
import { icons } from 'lucide-react';
import Link, { LinkProps } from 'next/link';
import LucideIcon from './LucideIcon';

interface PrimaryLinkProps
  extends LinkProps,
    React.HTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  className?: string;
  icon?: keyof typeof icons;
  target?: string;
}

const PrimaryLinkButton = ({
  children,
  href,
  icon,
  className,
  target,
}: PrimaryLinkProps) => {
  return (
    <Link
      href={href}
      className={cn(
        'inline-flex h-12 shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-md bg-black px-5 font-medium text-white',
        className
      )}
      target={target}
    >
      {icon && <LucideIcon name={icon} className="-ml-0.5 h-5 w-5" />}
      {children}
    </Link>
  );
};

export default PrimaryLinkButton;
