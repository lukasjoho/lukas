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
  titleVariant,
}) => {
  return (
    <div className="flex grow flex-col space-y-8 pt-3 md:space-y-16 md:pt-6">
      <PageHeader
        title={title}
        subtitle={subtitle}
        backlink={backlink}
        containerVariant={containerVariant}
        titleVariant={titleVariant}
      />
      <div className="grow">{children}</div>
      <Footer />
    </div>
  );
};

export default PageLayout;
