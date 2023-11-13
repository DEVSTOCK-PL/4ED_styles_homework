import styled from "styled-components";

const SocialProofWrapper = styled.section`
  background-color: ${({ theme }) => theme.background_1};
  width: 100%;
  display: flex;
  justify-content: center;
`;
const SocialProofContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 96px;

  @media (max-width: 1024px) {
    padding: 64px 16px;
  }
  @media (max-width: 640px) {
    padding: 0 16px 32px 16px;
    margin-bottom: 0;
  }
`;
const Container = styled.div`
  width: 1024px;
  display: flex;
  justify-content: center;
  padding: 24px 16px;
  background-color: ${({ theme }) => theme.background_2};
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 8px;

  box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.05), 0px 10px 15px -3px rgba(0, 0, 0, 0.1);

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  div:not(:last-of-type) {
    border-right: 1px solid ${({ theme }) => theme.borderColor};
  }

  @media (max-width: 1024px) {
    width: 768px;
    align-items: start;
  }

  @media (max-width: 640px) {
    width: 100%;
    flex-direction: column;
    gap: 16px;

    div:not(:last-of-type) {
      border-right: none;
    }
  }
`;
const Header = styled.h1`
  font-size: 36px;
  font-weight: 800;
  letter-spacing: -0.36px;
  line-height: 125%;
  color: ${({ theme }) => theme.text};
  align-self: center;
`;

const Paragraph = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #9ca3af;
  line-height: 150%;
  overflow-wrap: break-word;
  text-align: center;
`;

const SocialProof = () => {
  return (
    <SocialProofWrapper>
      <SocialProofContainer>
        <Container>
          <div>
            <Header>104M</Header>
            <Paragraph>Trees planted</Paragraph>
          </div>
          <div>
            <Header>20k+</Header>
            <Paragraph>Partners & Donors</Paragraph>
          </div>
          <div>
            <Header>90M</Header>
            <Paragraph>Tonnes of Carbon Stored</Paragraph>
          </div>
          <div>
            <Header>50+</Header>
            <Paragraph>People-Powered Projects</Paragraph>
          </div>
        </Container>
      </SocialProofContainer>
    </SocialProofWrapper>
  );
};

export default SocialProof;
