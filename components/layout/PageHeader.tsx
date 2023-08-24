import { FC } from 'react';
import Title from '../shared/Title';
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
        <Title as="h1" className="text-3xl md:text-4xl">
          {title}
        </Title>
        {subtitle && <h2 className="text-muted text-base">{subtitle}</h2>}
      </div>
    </Container>
  );
};

export default PageHeader;
