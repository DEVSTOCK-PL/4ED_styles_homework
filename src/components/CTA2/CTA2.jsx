import styled from "styled-components";
import Button from "../Reusable/Button";
import ProgressBar from "../Reusable/ProgressBar";

const CTA2Wrapper = styled.div`
  display: flex;
  width: 1440px;
  /* padding: 96px 0px; */
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
const Container = styled.div`
  display: flex;
  width: 1280px;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

const Header = styled.div`
  display: flex;
  width: 676px;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const Heading = styled.h2`
  color: #fff;
  width: 640px;
  text-align: center;
  font-family: Inter;
  font-size: 36px;
  font-style: normal;
  font-weight: 800;
  line-height: 125%; /* 45px */
  letter-spacing: -0.36px;
  margin: 0;
`;

const SupportText = styled.p`
  color: #9ca3af;
  width: 640px;
  text-align: center;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 30px */
  margin: 0;
`;

const Cards = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 48px;
  align-self: stretch;
`;

const Card = styled.div`
  display: flex;
  padding: 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  flex: 1 0 0;
  border-radius: 8px;
  border: 1px solid #374151;
  background: #1f2a37;

  box-shadow: 0px 2px 4px -2px rgba(0, 0, 0, 0.05),
    0px 4px 6px -1px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  height: 288px;
  align-self: stretch;
  border-radius: 8px;

  box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.05),
    0px 10px 15px -3px rgba(0, 0, 0, 0.1);
`;

const Heading2 = styled.h2`
  color: #fff;
  align-self: stretch;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 125%;
  letter-spacing: 0.05em;
  margin: 0;
`;

const SupportText2 = styled.p`
  color: #9ca3af;
  align-self: stretch;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin: 0;
  /* margin-top: 0 !important; 
  margin-bottom: 0 !important;  */
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 16px;

  & img {
    margin-right: 8px;
  }
`;

const AllEventLink = styled.a`
  color: #3f83f8;
  text-decoration: none;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 6px;

  & span {
    text-align: center;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }

  & img {
    width: 20px;
    height: 20px;
  }
`;

function CTA2Component({ cta2 }) {
  return (
    <CTA2Wrapper>
      <Container>
        <Header>
          <Heading>{cta2.heading}</Heading>
          <SupportText>{cta2.supportText}</SupportText>
        </Header>
        <Cards>
          {cta2.cards.map((card, index) => (
            <Card key={index}>
              <Image src={card.image} alt="Mockup" />
              <ProgressBar
                current={card.goal.current}
                total={card.goal.total}
                goals={card.goal.goals}
              />
              <Heading2>{card.heading}</Heading2>
              <SupportText2>{card.supportText}</SupportText2>
              <ButtonsWrapper>
                <Button version="primary">{card.buttons[0].text}</Button>
                <Button version="transparent">
                  <img src="/icons/icon_share.svg" alt="Share Icon" />
                  {card.buttons[1].text}
                </Button>
              </ButtonsWrapper>
            </Card>
          ))}
        </Cards>
        <AllEventLink href="#">
          <span>View all fundraising events</span>
          <img src="./icons/icon_arrowright_blue.svg" />
        </AllEventLink>
      </Container>
    </CTA2Wrapper>
  );
}

export default CTA2Component;
