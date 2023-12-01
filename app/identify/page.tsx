import IdentifyForm from '@/components/pages/07-identify/IdentifyForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

const IdentifyPage = () => {
  return (
    <div className="grid w-full grow place-items-center">
      <IdentifyForm />
    </div>
  );
};

export default IdentifyPage;
