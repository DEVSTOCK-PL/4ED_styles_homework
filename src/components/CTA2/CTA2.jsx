import { Link } from "react-router-dom";
import UseDonationLogic from "../hooks/useDonationLogic";
import styled from "styled-components";
import Button from "../Reusable/Button";
import ProgressBar from "../Reusable/ProgressBar";

const CTA2Wrapper = styled.div`
  display: flex;
  width: 1440px;
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
  color: ${({ theme }) => theme.title};
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
  color: ${({ theme }) => theme.text};
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
  flex-wrap: wrap;
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
  max-width: calc(44% - 24px);
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.toggleBorder};
  background: ${({ theme }) => theme.footerBackground};
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
  color: ${({ theme }) => theme.title};
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
  color: ${({ theme }) => theme.text};
  align-self: stretch;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin: 0;
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

function CardComponent({
  image,
  goal,
  heading,
  supportText,
  buttons,
  displayButtons,
}) {
  const { current, total, goals } = goal;
  const { donationCurrent, donate, isTotalAchieved, newGoals } =
    UseDonationLogic(current, total, goals);

  return (
    <Card>
      <Image src={image} alt="Mockup" />
      <ProgressBar current={donationCurrent} total={total} goals={newGoals} />
      <Heading2>{heading}</Heading2>
      <SupportText2>{supportText}</SupportText2>
      {displayButtons && (
        <ButtonsWrapper>
          <Button
            version="primary"
            onClick={() => donate()}
            disabled={isTotalAchieved}
          >
            {isTotalAchieved ? "Reached!" : buttons[0].text}
          </Button>
          <Button version="transparent">
            <img src="/icons/icon_share.svg" alt="Share Icon" />
            {buttons[1].text}
          </Button>
        </ButtonsWrapper>
      )}
    </Card>
  );
}

function CTA2Component({ cta2, displayCards, displayButtons }) {
  return (
    <CTA2Wrapper>
      <Container>
        <Header>
          <Heading>{cta2.heading}</Heading>
          <SupportText>{cta2.supportText}</SupportText>
        </Header>
        <Cards>
          {cta2.cards.slice(0, displayCards).map((cardProps, index) => (
            <CardComponent
              key={index}
              {...cardProps}
              displayButtons={displayButtons}
            />
          ))}
        </Cards>
        {!displayButtons && (
          <AllEventLink as={Link} to="/EVENTS">
            <span>View all fundraising events</span>
            <img src="./icons/icon_arrowright_blue.svg" />
          </AllEventLink>
        )}
      </Container>
    </CTA2Wrapper>
  );
}

export default CTA2Component;
