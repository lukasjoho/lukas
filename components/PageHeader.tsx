import { FC } from 'react';
import BackLink from './BackLink';
import Container from './Container';
import PageTitle from './PageTitle';

interface BackLink {
  href: string;
  label: string;
}

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backlink: BackLink;
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
    <Container
      className="space-y-2 md:space-y-4 mb-8 md:mb-16"
      variant={containerVariant}
    >
      <BackLink href={backlink.href} label={backlink.label} />
      <div className="space-y-1 md:space-y-2">
        <PageTitle>{title}</PageTitle>
        {subtitle && <h2 className="text-muted text-xl">{subtitle}</h2>}
      </div>
    </Container>
  );
};

export default PageHeader;
