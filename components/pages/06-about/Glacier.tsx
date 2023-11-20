import Container from '@/components/layout/Container';
import OptimizedImage from '@/components/shared/OptimizedImage';
import Title from '@/components/shared/Title';
import Balancer from 'react-wrap-balancer';

const Glacier = () => {
  return (
    <Container>
      <div className="relative aspect-[4/5] overflow-hidden rounded-xl md:aspect-[3/2] md:rounded-2xl">
        <OptimizedImage
          src="https://res.cloudinary.com/du3mz9iny/image/upload/v1700433848/lukas-glacier_z3udab.jpg"
          style={{ position: 'absolute', height: '100%', width: '100%' }}
          steps={[400, 600, 800, 1000, 1100]}
        />
        <Title className="absolute top-8 w-full px-4 text-center text-lg text-white md:top-16 md:px-16 md:text-4xl">
          <Balancer>
            Design is the practice of letting go. <br />
            Of letting go of all that is unnecessary. <br />
            Exploring the mountains is the perfect practice.
          </Balancer>
        </Title>
      </div>
    </Container>
  );
};

export default Glacier;
