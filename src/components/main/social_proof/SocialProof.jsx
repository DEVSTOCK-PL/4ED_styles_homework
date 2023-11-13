import styled from 'styled-components';

import { Row } from './Row';

const SocialProofContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 96px;

  @media (max-width: 768px) {
    padding: 0 20px 96px;
  }
  @media (max-width: 640px) {
    padding: 0 10px 20px;
  }
`;

export const SocialProof = () => {
  return (
    <SocialProofContainer className="socialProofContainer">
      <Row />
    </SocialProofContainer>
  );
};
