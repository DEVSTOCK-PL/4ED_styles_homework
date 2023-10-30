import styled from 'styled-components';

import { Container } from '../../Container';

const HeadingContainer = styled(Container)`
  flex-direction: column;
  align-items: center;
  row-gap: 16px;
  background: #111928;
`;

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

export const Heading = () => {
  return (
    <HeadingContainer>
      <StyledH2>Contact us</StyledH2>
      <StyledP>
        Got a technical issue? Want to send feedback about a beta feature? Need
        details about our Business plan? Let us know.
      </StyledP>
    </HeadingContainer>
  );
};
