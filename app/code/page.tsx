import PageLayout from '@/components/layout/PageLayout';
import CodeProjectsGrid from '@/components/pages/02-code/CodeProjectsGrid';

const CodePage = () => {
  return (
    <PageLayout
      title="As an engineer I act as my own product manager. I dont need and I dont
        want perfect requirements. Give me vision and business objectives, and
        together we will figure out exciting puzzles."
      backlink={{ href: '/', label: 'Back to home' }}
    >
      <CodeProjectsGrid />
    </PageLayout>
  );
};

export default CodePage;
