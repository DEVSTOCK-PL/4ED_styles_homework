import styled from "styled-components";
import Button from "../Reusable/Button";

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  color: ${({ theme }) => theme.title};

  @media (max-width: 1200px) {
    width: 100%;
    align-items: flex-start;
  }
`;

const HeroWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  gap: 64px;

  @media (max-width: 1200px) {
    flex-direction: column;
    width: 100%;
    gap: 16px;
  }
`;

const Carousel = styled.img`
  display: flex;
  width: 576px;
  height: 360px;
  flex-shrink: 0;
  border-radius: 8px;

  @media (max-width: 1200px) {
    display: flex;
    width: 75%;
    height: 176px;
    margin-top: 16px;
    justify-content: center;
    align-items: center;
  }
`;

const LeftContent = styled.div`
  display: flex;
  width: 576px;
  flex-direction: column;
  align-items: flex-start;
  font-family: Inter;

  @media (max-width: 1200px) {
    width: 80%;
  }
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

  @media (max-width: 1200px) {
    flex-direction: column;
    width: 100%;
    gap: 16px;

    & > :nth-child(2) {
      width: 100%;
    }
  }
`;

const SponsorsTitle = styled.div`
  display: flex;
  padding-top: 32px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
  border-top: 1px solid ${({ theme }) => theme.toggleBorder};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  color: ${({ theme }) => theme.logosText};
  flex-wrap: wrap;

  & p {
    gap: 0;
    margin: 0;
    padding: 0;
  }

  @media (max-width: 1200px) {
    & p {
      display: none;
    }
  }
`;

const SponsorsLogos = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  /* align-self: stretch; */
  flex-wrap: wrap;

  @media (max-width: 1200px) {
    width: 100%;
  }
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
            <p>Sponsors:</p>
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
