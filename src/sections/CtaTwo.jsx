import styled from "styled-components";

import ProgressBar from "../components/ProgressBar";

import image1 from "../assets/foto/mockup2.png";
import image2 from "../assets/foto/mockup5.png";
import image3 from "../assets/foto/mockup6.png";

import { ArrowRightBlue } from "../assets/svg_components";

const image88 = window.innerWidth <= 768 ? image3 : image2;

const textTitle1 = "Fundraising events";
const textSupporting1 =
  "Flowbite helps you connect with friends, family and communities of people who share your interests. ";
const textTitle2 = "Thank you for supporting in planting trees work.";
const textSupporting2 =
  "Our fundraisers are a creative bunch when it comes to taking on challenges, from beard shaves and bake sales to stand-up comedy and streaming marathons. There is something for everyone.";

const Container = styled.div`
  /* background-color: #111928; */
  width: 100%;
  max-width: 1440px;
  height: 997px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 1025px) and (max-width: 1280px) {
    max-width: 1280px;
    height: auto;
    padding-bottom: 30px;
    padding-top: 30px;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    max-width: 1024px;
    height: auto;
    padding-top: 42px;
    padding-bottom: 42px;
  }
  @media (min-width: 641px) and (max-width: 768px) {
    max-width: 768px;
    height: auto;
    padding-top: 10px;
  }
  @media (max-width: 640px) {
    max-width: 640px;
    height: auto;
    padding-top: 10px;
  }
`;

const Content = styled.div`
  width: 89%;
  height: auto;
  gap: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  @media (min-width: 641px) and (max-width: 768px) {
    width: 643px;
    height: auto;
    gap: 16px;
    margin-bottom: 20px;
    margin-top: 20px;
  }
  @media (max-width: 640px) {
    width: 343px;
    height: auto;
    gap: 16px;
    margin-bottom: 20px;
    margin-top: 20px;
  }
`;

const Heading = styled.div`
  width: 53%;
  height: auto;
  gap: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Cards = styled.div`
  width: 100%;
  height: 593px;
  gap: 48px;
  display: flex;
  justify-content: space-between;

  @media (min-width: 1025px) and (max-width: 1280px) {
    gap: 20px;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    height: auto;
  }
  @media (min-width: 641px) and (max-width: 768px) {
    width: 643px;
    height: auto;
    flex-direction: column;
    gap: 30px;
    align-items: center;
  }
  @media (max-width: 640px) {
    width: 343px;
    height: auto;
    flex-direction: column;
    gap: 30px;
  }
`;

const Card = styled.div`
  width: 48%;
  height: 593px;
  border-radius: 8px;
  border: 1px solid #374151;
  /* background-color: #1f2a37; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  padding-top: 30px;
  box-sizing: border-box;
  gap: 16px;

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 616px;
  }
  @media (min-width: 641px) and (max-width: 768px) {
    width: 443px;
    height: auto;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  @media (max-width: 640px) {
    width: 343px;
    height: auto;
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;

const ImgBox = styled.div`
  width: 90%;
  height: 288px;
  border-radius: 8px;
  overflow: hidden;

  @media (min-width: 1025px) and (max-width: 1280px) {
    width: 90%;
  }
  @media (max-width: 640px) {
    width: 303px;
    height: 288px;
  }
  @media (min-width: 641px) and (max-width: 768px) {
    width: 403px;
    height: 288px;
  }
`;

const Img = styled.img`
  width: 110%;
  height: 110%;
  border-radius: 8px;
  transform: translateX(-5%);
`;

const ProgressBarContainer = styled.div`
  max-width: 552px;
  width: 90%;
  height: 41px;

  @media (min-width: 641px) and (max-width: 768px) {
    width: 403px;
    height: 41px;
    margin-bottom: 10px;
  }
  @media (max-width: 640px) {
    width: 303px;
    height: 41px;
  }
`;

const Button = styled.button`
  background-color: #111928;
  width: 280px;
  height: 27px;
  color: #3f83f8;
  font-size: 18px;
  font-weight: 400;
  border: none;
  display: flex;
  gap: 6px;
`;

const Title = styled.p`
  width: 100%;
  height: auto;
  font-size: 36px;
  line-height: 45px;
  font-weight: 800;
  margin: 0;

  @media (min-width: 641px) and (max-width: 768px) {
    font-size: 30px;
    line-height: 37px;
  }
  @media (max-width: 640px) {
    font-size: 30px;
    line-height: 37px;
    min-width: 350px;
  }
`;

const Title2 = styled.p`
  width: 90%;
  height: auto;
  font-size: 18px;
  line-height: 23px;
  font-weight: 700;
  margin: 0;
  text-align: left;
  padding-top: 8px;

  @media (min-width: 1025px) and (max-width: 1280px) {
    width: 90%;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    width: 90%;
  }
  @media (min-width: 641px) and (max-width: 768px) {
    font-size: 30px;
    line-height: 37px;
    width: 403px;
  }
  @media (max-width: 640px) {
    font-size: 18px;
    line-height: 22px;
    width: 303px;
  }
`;

const TextSupporting = styled.p`
  width: 100%;
  height: auto;
  font-size: 20px;
  line-height: 30px;
  font-weight: 400;
  margin: 0;
  color: #9ca3af;

  @media (min-width: 641px) and (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

const TextSupporting2 = styled.p`
  width: 90%;
  height: auto;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  margin: 0;
  color: #9ca3af;
  text-align: left;
  padding-top: 8px;

  @media (min-width: 1025px) and (max-width: 1280px) {
    width: 90%;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    width: 90%;
  }
  @media (min-width: 641px) and (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
    width: 403px;
  }
  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 24px;
    width: 303px;
  }
`;

const CtaTwo = () => {
  return (
    <Container>
      <Content>
        <Heading>
          <Title>{textTitle1}</Title>
          <TextSupporting>{textSupporting1}</TextSupporting>
        </Heading>
        <Cards>
          <Card>
            <ImgBox>
              <Img src={image1} alt="Trees plantd" />
            </ImgBox>
            <ProgressBarContainer>
              <ProgressBar donors="3473" colected="276856" goal="400000" />
            </ProgressBarContainer>
            <Title2>{textTitle2}</Title2>
            <TextSupporting2>{textSupporting2}</TextSupporting2>
          </Card>
          <Card>
            <ImgBox>
              <Img src={image88} alt="Volunteers" />
            </ImgBox>
            <ProgressBarContainer>
              <ProgressBar donors="473" colected="36856" goal="150000" />
            </ProgressBarContainer>
            <Title2>{textTitle2}</Title2>
            <TextSupporting2>{textSupporting2}</TextSupporting2>
          </Card>
        </Cards>
        <Button>
          View all fundraising events
          <ArrowRightBlue />
        </Button>
      </Content>
    </Container>
  );
};
export default CtaTwo;
