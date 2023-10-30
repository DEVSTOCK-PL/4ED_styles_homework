import styled from 'styled-components';

import { Container } from '../../Container';

const HeadingContainer = styled(Container)`
  flex-direction: column;
  align-items: center;
  row-gap: 16px;
  background: #1f2a37;
`;

const StyledH2 = styled.h2`
  font-size: 36px;
  font-weight: 800;
  letter-spacing: -1px;
  text-align: center;
`;

const StyledP = styled.p`
  width: 80%;
  font-size: 20px;
  font-weight: 400;
  color: #9ca3af;
  text-align: center;
`;

export const Heading = () => {
  return (
    <HeadingContainer>
      <StyledH2>Latest news & events</StyledH2>
      <StyledP>
        We use an agile approach to test assumptions and connect with the needs
        of your audience early and often.
      </StyledP>
    </HeadingContainer>
  );
};
