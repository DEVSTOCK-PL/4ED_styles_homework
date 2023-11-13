import styled from "styled-components";

const SocialProofContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 0;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.body};

  @media (max-width: 1200px) {
    /* flex-direction: column; */
    /* align-items: flex-start; */
    width: 100%;
    /* gap: 16px; */
  }
`;

const SocialProofWrapper = styled.div`
  display: flex;
  width: 1024px;
  padding: 24px 16px;
  align-items: flex-start;
  border-radius: 8px;
  border: 1px solid #374151;
  background: ${({ theme }) => theme.footerBackground};
  box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.05),
    0px 10px 15px -3px rgba(0, 0, 0, 0.1);

  @media (max-width: 1200px) {
    flex-direction: column;
    justify-content: center;
    width: 100%;
    gap: 16px;
  }
`;

const SocialProofCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 0 0;
  border-right: 1px solid ${({ theme }) => theme.toggleBorder};

  &:last-child {
    border-right: none;
  }

  & h2 {
    align-self: stretch;
    color: ${({ theme }) => theme.title};
    text-align: center;
    font-family: Inter;
    font-size: 36px;
    font-style: normal;
    font-weight: 800;
    line-height: 125%; /* 45px */
    letter-spacing: -0.36px;
    margin: 0;
  }

  & p {
    color: ${({ theme }) => theme.text};
    text-align: center;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    align-self: stretch;
    margin: 0;
  }

  @media (max-width: 1200px) {
    flex-direction: column;
    justify-content: center;
    width: 100%;
    /* gap: 16px; */
  }
`;

function SocialProofComponent({ socialProof }) {
  const socialsArray = Object.values(socialProof);

  return (
    <SocialProofContainer>
      <SocialProofWrapper>
        {socialsArray.map(({ heading, supportingText }, index) => (
          <SocialProofCard key={index}>
            <h2>{heading}</h2>
            <p>{supportingText}</p>
          </SocialProofCard>
        ))}
      </SocialProofWrapper>
    </SocialProofContainer>
  );
}

export default SocialProofComponent;
