import Container from '@/components/layout/Container';
import OptimizedImage from '@/components/shared/OptimizedImage';
import Title from '@/components/shared/Title';

const Intro = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 overflow-hidden rounded-xl  bg-lightgrey md:grid-cols-2 md:gap-16 md:rounded-2xl">
        <div className="space-y-2 p-6 md:space-y-4 md:p-8">
          <Title className="text-2xl md:text-2xl">
            Happy to see you here 👋
          </Title>
          <p className="text-base md:text-lg">
            Ever since building my first website I fell in love with building
            software. I first managed building software as a product manager
            before deciding to become a software engineer myself. I value
            iteration and working in teams that follow a clear mission with good
            strategy. I am committed to build user experiences to the highest
            standards across the full product stack (frontend + backend + data
            layer).
          </p>
        </div>
        <div className="relative order-first aspect-[3/2] overflow-hidden md:order-last">
          <OptimizedImage
            src={
              'https://res.cloudinary.com/du3mz9iny/image/upload/v1700433432/lukas-new-york_r9qyzd.jpg'
            }
          />
        </div>
      </div>
    </Container>
  );
};

export default Intro;
