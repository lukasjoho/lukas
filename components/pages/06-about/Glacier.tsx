import Container from '@/components/layout/Container';
import Title from '@/components/shared/Title';
import Image from 'next/image';
import Balancer from 'react-wrap-balancer';

const Glacier = () => {
  return (
    <Container>
      <div className="relative aspect-[4/5] overflow-hidden rounded-xl md:aspect-[3/2] md:rounded-2xl">
        <Image
          src="/images/about/lukas-glacier.jpg"
          alt=""
          fill
          sizes="(max-width: 768px) 600px, 1200px"
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
