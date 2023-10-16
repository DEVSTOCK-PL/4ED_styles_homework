import styled from 'styled-components';
import { Container } from '../../Container';

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
  color: #9ca3af;
  text-align: center;
`;

export const Heading = () => {
  return (
    <Container flexDirection="column" alignItems="center" rowGap="16px">
      <StyledH2>Fundraising events</StyledH2>
      <StyledP>
        Flowbite helps you connect with friends, family and communities of
        people who share your interests.
      </StyledP>
    </Container>
  );
};
