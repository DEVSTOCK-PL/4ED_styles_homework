/* eslint-disable react/prop-types */
import styled from 'styled-components';

const StyledDiv = styled.div`
  /* display: flex; */
`;
const StyledImg = styled.img`
  width: 540px;

  @media (max-width: 1024px) {
    width: 440px;
  }
  @media (max-width: 768px) {
    width: 340px;
  }
  @media (max-width: 640px) {
    display: none;
  }
`;

export const Mockup = ({ img }) => {
  return (
    <StyledDiv>
      <StyledImg src={img} alt="image" />
    </StyledDiv>
  );
};
