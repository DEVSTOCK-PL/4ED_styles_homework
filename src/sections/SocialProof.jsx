import styled from "styled-components";

const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  height: 190px;
  background-color: #111928;
  display: flex;
  justify-content: center;

  @media (min-width: 1025px) and (max-width: 1280px) {
    max-width: 1280px;
    height: 190px;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    max-width: 1024px;
    height: auto;
  }
  @media (min-width: 641px) and (max-width: 768px) {
    max-width: 768px;
    height: 360px;
  }
  @media (max-width: 640px) {
    max-width: 640px;
    height: 360px;
  }
`;

const Row = styled.div`
  max-width: 1024px;
  width: 78%;
  height: 117px;
  background-color: #1f2a37;
  border: 1px solid #374151;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 1025px) and (max-width: 1280px) {
    width: 85%;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    width: 65%;
    height: auto;
    flex-direction: column;
    justify-content: space-around;
    margin-top: 10px;
  }
  @media (min-width: 641px) and (max-width: 768px) {
    width: 343px;
    height: 328px;
    flex-direction: column;
    justify-content: space-around;
    margin-top: 10px;
  }
  @media (max-width: 640px) {
    width: 343px;
    height: 328px;
    flex-direction: column;
    justify-content: space-around;
    margin-top: 10px;
  }
`;
const Stat = styled.div`
  width: 248px;
  height: 69px;
  border-right: 1px solid #374151;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media (min-width: 769px) and (max-width: 1024px) {
    border-right: none;
    padding-top: 20px;
  }
  @media (min-width: 641px) and (max-width: 768px) {
    width: 311px;
    height: 62px;
    flex-direction: column;
    border-right: none;
  }
  @media (max-width: 640px) {
    width: 311px;
    height: 62px;
    flex-direction: column;
    border-right: none;
  }
`;
const StatEnd = styled(Stat)`
  border-right: none;

  @media (min-width: 769px) and (max-width: 1024px) {
    padding-bottom: 20px;
  }
`;

const Title = styled.p`
  width: 100%;
  color: #fff;
  font-size: 36px;
  line-height: 45px;
  font-weight: 800;
  margin: 0;
  text-align: center;

  @media (min-width: 1025px) and (max-width: 1280px) {
    font-size: 36px;
    line-height: 45px;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 36px;
    line-height: 45px;
  }
  @media (min-width: 641px) and (max-width: 768px) {
    font-size: 30px;
    line-height: 37px;
  }
  @media (max-width: 640px) {
    font-size: 30px;
    line-height: 37px;
  }
`;

const TextSupporting = styled.p`
  width: 100%;
  color: #9ca3af;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  text-align: center;
  margin: 0;
`;

const SocialProof = () => {
  return (
    <Container>
      <Row>
        <Stat>
          <Title>104M</Title>
          <TextSupporting>Trees planted</TextSupporting>
        </Stat>
        <Stat>
          <Title>20k+</Title>
          <TextSupporting>Partners & Donors</TextSupporting>
        </Stat>
        <Stat>
          <Title>90M</Title>
          <TextSupporting>Tonnes of Carbon Stored</TextSupporting>
        </Stat>
        <StatEnd>
          <Title>50+</Title>
          <TextSupporting>People-Pawered Project</TextSupporting>
        </StatEnd>
      </Row>
    </Container>
  );
};
export default SocialProof;
