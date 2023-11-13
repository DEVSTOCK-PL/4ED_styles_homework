import styled from 'styled-components';

import { Container } from '../../Container';
import { LeftContent } from './LeftContent';
import { Carousel } from './Carousel';

const HeroContainer = styled(Container)`
  justify-content: space-between;
  column-gap: 20px;
  padding: 96px 40px;

  @media (max-width: 768px) {
    padding: 72px 20px;
  }
  @media (max-width: 640px) {
    flex-direction: column;
    padding: 24px 10px;
    gap: 20px;
  }
`;

export const Hero = () => {
  return (
    <HeroContainer className="heroContainer">
      <LeftContent />
      <Carousel />
    </HeroContainer>
  );
};
