import { cn } from '@/lib/utils';
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
  backlink: BackLinkProps;
  subtitle?: string;
  containerVariant?:
    | 'small'
    | 'medium'
    | 'normal'
    | 'large'
    | 'fluid'
    | undefined;
  titleVariant?: 'bold' | 'thin';
}

const PageHeader: FC<PageHeaderProps> = ({
  title,
  subtitle,
  backlink,
  containerVariant,
  titleVariant = 'bold',
}) => {
  return (
    <Container className="space-y-2 md:space-y-4" variant={containerVariant}>
      <BackLink href={backlink.href} label={backlink.label} />
      <div className="md:space-y-1">
        <Title
          as="h1"
          className={cn(
            'text-2xl md:text-4xl',
            titleVariant == 'thin' && 'font-normal'
          )}
        >
          {title}
        </Title>
        {subtitle && <h2 className="text-base text-muted">{subtitle}</h2>}
      </div>
    </Container>
  );
};

export default PageHeader;
