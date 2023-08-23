import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';

interface BackLinkProps {
  href: string;
  label: string;
}

const BackLink: FC<BackLinkProps> = ({ href, label }) => {
  return (
    <Link
      href={href}
      className="text-muted flex items-center gap-1 text-sm group py-2"
    >
      <ArrowLeft className="w-4 h-4 transition duration-300 group-hover:translate-x-[-4px] group-hover:text-dark" />
      <span className="transition duration-300 group-hover:text-dark">
        {label}
      </span>
    </Link>
  );
};

export default BackLink;
