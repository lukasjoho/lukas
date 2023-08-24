import { FC } from 'react';
import Footer from './Footer';
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
    <div className="space-y-8 md:space-y-16 grow flex flex-col">
      <PageHeader
        title={title}
        subtitle={subtitle}
        backlink={backlink}
        containerVariant={containerVariant}
      />
      <div className="grow">{children}</div>
      <Footer />
    </div>
  );
};

export default PageLayout;
