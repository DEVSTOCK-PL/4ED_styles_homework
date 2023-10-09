import styled from "styled-components";
import Button from "../Reusable/Button";

const HeroContainer = styled.div`
  display: flex;
  /* padding: 96px 0px; */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  color: white;
`;

const HeroWrapper = styled.div`
  display: flex;
  width: 1280px;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  gap: 64px;
`;

const Carousel = styled.img`
  display: flex;
  width: 576px;
  height: 360px;
  flex-shrink: 0;
  border-radius: 8px;
`;

const LeftContent = styled.div`
  display: flex;
  width: 576px;
  flex-direction: column;
  align-items: flex-start;
  /* gap: 32px; */
  font-family: Inter;
`;

const TitleTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  align-self: stretch;
`;

const Title = styled.h1`
  font-size: 48px;
  font-style: normal;
  font-weight: 800;
  line-height: 48px;
  margin: 0;
`;

const Text = styled.p`
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin: 0;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 16px;
  justify-content: flex-start;
  padding: 32px 0px;
  margin: 0;
`;

const SponsorsTitle = styled.div`
  display: flex;
  padding-top: 32px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
  border-top: 1px solid #374151;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  color: #6b7280;
`;

const SponsorsLogos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  /* gap: 16px; */
`;

const Icon = styled.img`
  margin-right: 8px;
`;

function HeroComponent({ title, text, buttonText, sponsors, carousel }) {
  return (
    <HeroContainer>
      <HeroWrapper>
        <LeftContent>
          <TitleTextWrapper>
            <Title>{title}</Title>
            <Text>{text}</Text>
          </TitleTextWrapper>
          <ButtonsWrapper>
            {buttonText.map((text, index) =>
              index === 0 ? (
                <Button key={index} version="primary">
                  {text}
                </Button>
              ) : (
                <Button key={index} version="secondary">
                  <Icon
                    src="/icons/icon_videocamera.svg"
                    alt="Video Camera Icon"
                  />
                  {text}
                </Button>
              )
            )}
          </ButtonsWrapper>
          <SponsorsTitle>
            Sponsors:
            <SponsorsLogos>
              {sponsors.map((logo, index) => (
                <img key={index} src={logo} alt="sponsor logo" />
              ))}
            </SponsorsLogos>
          </SponsorsTitle>
        </LeftContent>
        <Carousel src={carousel} alt="carousel" />
      </HeroWrapper>
    </HeroContainer>
  );
}

export default HeroComponent;
