/* eslint-disable react/prop-types */
import styled from 'styled-components';

const StyledImg = styled.img`
  width: 100%;

  @media (max-width: 640px) {
    display: none;
  }
`;

export const Mockup = ({ img }) => {
  return (
    <div>
      <StyledImg src={img} alt="image" />
    </div>
  );
};
