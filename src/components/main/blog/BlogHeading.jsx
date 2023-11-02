import styled from 'styled-components';

import { Heading } from '../../Heading';

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

export const BlogHeading = () => {
  return (
    <Heading bcg>
      <StyledH2>Latest news & events</StyledH2>
      <StyledP>
        We use an agile approach to test assumptions and connect with the needs
        of your audience early and often.
      </StyledP>
    </Heading>
  );
};
