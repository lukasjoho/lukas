import Footer from '@/components/Footer';
import ModalProvider from '@/components/ModalProvider';

const ScrollLayout = ({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) => {
  return (
    <>
      <div className="grow pb-16 md:pb-32">{children}</div>
      <ModalProvider>{modal}</ModalProvider>

      <Footer />
    </>
  );
};

export default ScrollLayout;
