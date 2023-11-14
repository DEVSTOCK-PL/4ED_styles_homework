import styled from "styled-components";

import image1 from "../assets/foto/mockup2.png";
import image2 from "../assets/foto/mockup1.png";
import image3 from "../assets/foto/mockup3.png";

import { ArrowRightWhite } from "../assets/svg_components";

const title1 = "Flowbite Green is a climate chage non-profit organization.";
const title2 = "Protect our earth against climate change and pollution.";
const title3 = "Together we can restore our earth against climate change.";
const textSupporting =
  "Flowbite helps you connect friends, family and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Group.";

const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  height: 1444px;
  display: flex;
  justify-content: center;

  @media (min-width: 1025px) and (max-width: 1280px) {
    max-width: 1280px;
    height: auto;
    padding-top: 30px;
    padding-bottom: 30px;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    max-width: 1024px;
    height: auto;
  }
  @media (min-width: 641px) and (max-width: 768px) {
    max-width: 768px;
    height: auto;
    align-items: center;
  }
  @media (max-width: 640px) {
    max-width: 640px;
    height: auto;
    align-items: center;
  }
`;

const Content = styled.div`
  width: 89%;
  max-width: 1280px;
  height: 1348px;
  gap: 64px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 30px;

  @media (min-width: 1025px) and (max-width: 1280px) {
    height: auto;
    align-items: center;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    height: auto;
    align-items: center;
    padding-top: 30px;
    padding-bottom: 30px;
  }
  @media (min-width: 641px) and (max-width: 768px) {
    height: auto;
    align-items: center;
    gap: 32px;
    padding-bottom: 30px;
  }
  @media (max-width: 640px) {
    height: auto;
    align-items: center;
    gap: 32px;
    padding-bottom: 30px;
  }
`;

const Row = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 406px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Mockup = styled.div`
  width: 42%;
  height: 406px;
  border-radius: 8px;

  @media (min-width: 1025px) and (max-width: 1280px) {
    height: auto;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    display: none;
  }
  @media (min-width: 641px) and (max-width: 768px) {
    display: none;
  }
  @media (max-width: 640px) {
    display: none;
  }
`;

const SmallContainer = styled.div`
  width: 50%;
  min-width: 343px;
  height: 260px;
  gap: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 641px) and (max-width: 768px) {
    width: 343px;
    height: auto;
  }
  @media (max-width: 640px) {
    width: 343px;
    height: auto;
  }
`;

const Img = styled.img`
  width: 105%;
  transform: translateX(-3%);
`;

const Buttons = styled.div`
  width: 100%;
  height: 41px;
  gap: 16px;
  display: flex;
`;

const Title = styled.p`
  width: 100%;
  font-size: 36px;
  line-height: 45px;
  font-weight: 800;
  text-align: left;
  margin: 0;

  @media (min-width: 1025px) and (max-width: 1280px) {
    font-size: 34px;
    line-height: 36px;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 34px;
    line-height: 36px;
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
  font-size: 18px;
  line-height: 27px;
  font-weight: 400;
  text-align: left;
  margin: 0;
`;

const BlueButton = styled.button`
  width: 152px;
  height: 41px;
  border-radius: 8px;
  color: #fff;
  background-color: #1a56db;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  &:active {
    border: 1px solid #1a56db;
  }
`;

const BlueButton2 = styled(BlueButton)`
  width: 184px;
`;

const BlueButton3 = styled(BlueButton)`
  width: 140px;
`;

const GreyButton = styled(BlueButton)`
  width: 116px;
  background-color: #1f2a37;
  color: #9ca3af;
  border: 1px solid #4b5563;
`;

const CtaOne = () => {
  return (
    <Container>
      <Content>
        <Row>
          <Mockup>
            <Img src={image1} />
          </Mockup>
          <SmallContainer>
            <Title>{title1}</Title>
            <TextSupporting>{textSupporting}</TextSupporting>
            <Buttons>
              <BlueButton>
                Get involved
                <ArrowRightWhite />
              </BlueButton>
              <GreyButton>Learn more</GreyButton>
            </Buttons>
          </SmallContainer>
        </Row>
        <Row>
          <SmallContainer>
            <Title>{title2}</Title>
            <TextSupporting>{textSupporting}</TextSupporting>
            <Buttons>
              <BlueButton2>
                View all activities
                <ArrowRightWhite />
              </BlueButton2>
            </Buttons>
          </SmallContainer>
          <Mockup>
            <Img src={image2} />
          </Mockup>
        </Row>
        <Row>
          <Mockup>
            <Img src={image3} />
          </Mockup>
          <SmallContainer>
            <Title>{title3}</Title>
            <TextSupporting>{textSupporting}</TextSupporting>
            <Buttons>
              <BlueButton3>
                Read more
                <ArrowRightWhite />
              </BlueButton3>
            </Buttons>
          </SmallContainer>
        </Row>
      </Content>
    </Container>
  );
};
export default CtaOne;
