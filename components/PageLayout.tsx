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
    <div className="space-y-6 md:space-y-12">
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
