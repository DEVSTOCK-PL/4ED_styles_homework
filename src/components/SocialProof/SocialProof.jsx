import styled from "styled-components";

const SocialProofContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* gap: 64px; */
  background: #111928;
`;

const SocialProofWrapper = styled.div`
  display: flex;
  width: 1024px;
  padding: 24px 16px;
  align-items: flex-start;
  border-radius: 8px;
  border: 1px solid #374151;
  background: #1f2a37;

  box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.05),
    0px 10px 15px -3px rgba(0, 0, 0, 0.1);
`;

const SocialProofCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 0 0;
  border-right: 1px solid #374151;

  &:last-child {
    border-right: none;
  }

  & h2 {
    align-self: stretch;
    color: #fff;
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
    color: #9ca3af;
    text-align: center;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    align-self: stretch;
    margin: 0;
  }
`;

function SocialProofComponent({ socialProof }) {
  const socialsArray = Object.values(socialProof);

  return (
    <SocialProofContainer>
      {/* <SocialProofContainer2> */}
      <SocialProofWrapper>
        {socialsArray.map((social, index) => (
          <SocialProofCard key={index}>
            <h2>{social.heading}</h2>
            <p>{social.supportingText}</p>
          </SocialProofCard>
        ))}
      </SocialProofWrapper>
      {/* </SocialProofContainer2> */}
    </SocialProofContainer>
  );
}

export default SocialProofComponent;
