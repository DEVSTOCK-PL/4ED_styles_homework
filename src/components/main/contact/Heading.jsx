/* eslint-disable react/prop-types */
import styled from 'styled-components';

import { Heading as HeadingContainer } from '../../Heading';

const StyledH2 = styled.h2`
  font-size: 36px;
  font-weight: 800;
  letter-spacing: -1px;
  text-align: center;
`;

const StyledP = styled.p`
  width: 60%;
  font-size: 20px;
  font-weight: 400;
  color: #9ca3af;
  text-align: center;

  @media (max-width: 640px) {
    width: 100%;
  }
`;

export const Heading = ({ h2, p }) => {
  return (
    <HeadingContainer>
      <StyledH2>{h2}</StyledH2>
      <StyledP>{p}</StyledP>
    </HeadingContainer>
  );
};
