import { FC } from 'react';
import PageHeader, { PageHeaderProps } from './PageHeader';

interface PageLayoutProps extends PageHeaderProps {
  children: React.ReactNode;
}

const PageLayout: FC<PageLayoutProps> = ({
  title,
  subtitle,
  backlink,
  containerVariant,
  children,
}) => {
  return (
    <div className="space-y-8 md:space-y-16">
      <PageHeader
        title={title}
        subtitle={subtitle}
        backlink={backlink}
        containerVariant={containerVariant}
      />
      {children}
    </div>
  );
};

export default PageLayout;
