import styled from 'styled-components';

import { Heading } from '../../Heading';

import arrow_right_blue from '../../../assets/arrow_right_blue.svg';

const StyledH2 = styled.h2`
  font-size: 36px;
  font-weight: 800;
  letter-spacing: -1px;
  text-align: center;
`;

const StyledP = styled.p`
  width: 80%;
  font-size: 20px;
  font-weight: 300;
  text-align: center;
`;

const StyledLink = styled.a`
  display: flex;
  gap: 6px;
  color: #3f83f8;
  font-size: 16px;
  font-weight: 500;
`;

const StyledImg = styled.img``;

export const HeadingDesc = () => {
  return (
    <Heading>
      <StyledH2>Donors, Partners & Sponsors</StyledH2>
      <StyledP>
        Here at flowbite we focus on markets where technology, innovation, and
        capital can unlock long-term value.
      </StyledP>
      <StyledLink>
        Become a sponsor
        <StyledImg src={arrow_right_blue} alt="arrow" />
      </StyledLink>
    </Heading>
  );
};
