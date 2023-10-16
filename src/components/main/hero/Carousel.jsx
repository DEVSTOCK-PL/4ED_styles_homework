import styled from 'styled-components';
import carousel_1 from '../../../assets/carousel_1.svg';

const StyledImg = styled.img`
  width: 576px;
  max-width: 100%;

  /* ${(props) => ({
    width: props.width,
    height: props.height,
  })} */
`;

export const Carousel = () => {
  return (
    <div>
      <StyledImg src={carousel_1} alt="images" />
    </div>
  );
};
