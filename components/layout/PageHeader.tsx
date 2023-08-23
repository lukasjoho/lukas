import { FC } from 'react';
import BackLink from './BackLink';
import Container from './Container';

interface BackLinkProps {
  href: string;
  label: string;
}

export interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backlink: BackLinkProps;
  containerVariant?:
    | 'small'
    | 'medium'
    | 'normal'
    | 'large'
    | 'fluid'
    | 'static'
    | undefined;
}

const PageHeader: FC<PageHeaderProps> = ({
  title,
  subtitle,
  backlink,
  containerVariant,
}) => {
  return (
    <Container className="space-y-2 md:space-y-4" variant={containerVariant}>
      <BackLink href={backlink.href} label={backlink.label} />
      <div className="md:space-y-1">
        <h1 className="text-dark text-3xl md:text-4xl xl:max-w-[70%] font-meche">
          {title}
        </h1>
        {subtitle && <h2 className="text-muted text-base">{subtitle}</h2>}
      </div>
    </Container>
  );
};

export default PageHeader;
