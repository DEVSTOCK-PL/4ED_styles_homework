import styled from "styled-components";

import Slider from "../components/Slider";

import image1 from "../assets/foto/mockup4.png";
import image2 from "../assets/foto/mockup3.png";
import image3 from "../assets/foto/mockup1.png";

import {
  VideoCamera,
  Intel,
  FedEx,
  Visa,
  Disney,
} from "../assets/svg_components";

const images = [image1, image2, image3];
const textTitle = "Making earth cooler for people, nature, climate";
const supportingText =
  "Protecting the planet and its natural resources for future generations, by reducing pollution, promoting sustainability, and coserving energy and resources.";

const HeroContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  height: 626px;
  background-color: #111928;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 1025px) and (max-width: 1280px) {
    max-width: 1280px;
    height: auto;
    padding-top: 40px;
    padding-bottom: 40px;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    max-width: 1024px;
    height: auto;
    padding-top: 40px;
    padding-bottom: 40px;
  }
  @media (min-width: 641px) and (max-width: 768px) {
    max-width: 768px;
    height: auto;
    padding-top: 40px;
    padding-bottom: 40px;
  }
  @media (max-width: 640px) {
    max-width: 640px;
    height: auto;
    padding-top: 40px;
    padding-bottom: 40px;
  }
`;
const HeroContent = styled.div`
  width: 89%;
  max-width: 1280px;
  height: 434px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 1025px) and (max-width: 1280px) {
    height: auto;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    height: auto;
  }
  @media (min-width: 641px) and (max-width: 768px) {
    height: auto;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  @media (max-width: 640px) {
    height: auto;
    flex-direction: column;
    justify-content: space-around;
  }
`;
const LeftItem = styled.div`
  width: 45%;
  height: auto;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 24px;

  @media (min-width: 641px) and (max-width: 768px) {
    width: 100%;
    align-items: center;
  }
  @media (max-width: 640px) {
    width: 100%;
    align-items: center;
  }
`;

const Title = styled.p`
  width: 100%;
  color: #fff;
  font-size: 48px;
  line-height: 48px;
  font-weight: 800;
  text-align: left;
  margin: 0;

  @media (min-width: 1025px) and (max-width: 1280px) {
    font-size: 40px;
    line-height: 42px;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 34px;
    line-height: 36px;
  }
  @media (min-width: 641px) and (max-width: 768px) {
    font-size: 30px;
    line-height: 30px;
    max-width: 343px;
  }
  @media (max-width: 640px) {
    font-size: 30px;
    line-height: 30px;
    max-width: 343px;
  }
`;

const TextSupporting = styled.p`
  width: 100%;
  color: #9ca3af;
  font-size: 20px;
  line-height: 30px;
  font-weight: 400;
  text-align: left;
  margin: 0;

  @media (min-width: 1025px) and (max-width: 1280px) {
    font-size: 20px;
    line-height: 28px;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 18px;
    line-height: 26px;
  }
  @media (min-width: 641px) and (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
    max-width: 343px;
  }
  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 24px;
    max-width: 343px;
  }
`;

const Buttons = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: start;
  gap: 16px;
  margin-top: 15px;
  margin-bottom: 15px;

  @media (min-width: 769px) and (max-width: 1024px) {
    margin-top: 15px;
    margin-bottom: 10px;
  }
  @media (min-width: 641px) and (max-width: 768px) {
    width: 343px;
    height: 112px;
    gap: 16px;
    flex-direction: column;
    margin-top: 5px;
    margin-bottom: 10px;
  }
  @media (max-width: 640px) {
    width: 343px;
    height: 112px;
    gap: 16px;
    flex-direction: column;
    margin-top: 5px;
    margin-bottom: 10px;
  }
`;

const SponsorsContainer = styled.div`
  width: 100%;
  height: 116px;
  padding-top: 32px;
  border-top: 1px solid #374151;

  @media (min-width: 769px) and (max-width: 1024px) {
    height: auto;
    padding-top: 16px;
  }
  @media (min-width: 641px) and (max-width: 768px) {
    width: 340px;
    height: 32px;
    padding-top: 0;
    border-top: none;
  }
  @media (max-width: 640px) {
    width: 340px;
    height: 32px;
    padding-top: 0;
    border-top: none;
  }
`;
const Sponsors = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #6b7280;
  font-weight: 500;
  text-align: left;
  margin: 0;
  @media (min-width: 641px) and (max-width: 768px) {
    display: none;
  }
  @media (max-width: 640px) {
    display: none;
  }
`;
const RightItem = styled.div`
  max-width: 576px;
  width: 45%;
  height: 83%;
  border-radius: 8px;
  display: flex;
  align-items: center;

  @media (min-width: 1101px) and (max-width: 1280px) {
    max-width: 513px;
    height: 320px;
  }
  @media (min-width: 1025px) and (max-width: 1100px) {
    max-width: 440px;
    height: 275px;
  }
  @media (min-width: 911px) and (max-width: 1024px) {
    max-width: 410px;
    height: 256px;
  }
  @media (min-width: 769px) and (max-width: 910px) {
    max-width: 364px;
    height: 228px;
  }
  @media (min-width: 641px) and (max-width: 768px) {
    width: 343px;
    height: 214px;
    margin-top: 30px;
  }
  @media (max-width: 640px) {
    width: 343px;
    height: 214px;
    margin-top: 30px;
  }
`;
const SvgContainer = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  gap: 45px;
  position: relative;

  @media (min-width: 1025px) and (max-width: 1280px) {
    gap: 38px;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    margin-top: 0px;
    gap: 20px;
  }
  @media (min-width: 641px) and (max-width: 768px) {
    height: 32px;
    margin-top: 0;
    gap: 10px;
  }
  @media (max-width: 640px) {
    height: 32px;
    margin-top: 0;
    gap: 10px;
  }
`;

const Svg = styled.svg`
  padding-top: 10px;
  height: 48px;
  display: flex;
  align-items: center;
  position: relative;

  @media (min-width: 769px) and (max-width: 1024px) {
    height: 32px;
  }
  @media (min-width: 641px) and (max-width: 768px) {
    padding-top: 0px;
    width: 80px;
    height: 32px;
  }
  @media (max-width: 640px) {
    padding-top: 0px;
    width: 80px;
    height: 32px;
  }
`;

const Image = styled.image`
  width: 100%;
  position: absolute;
  bottom: 0;
  vertical-align: bottom;
`;

const BlueButton = styled.button`
  width: 182px;
  height: 48px;
  border-radius: 8px;
  color: #fff;
  background-color: #1a56db;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:active {
    border: 1px solid #1a56db;
  }

  @media (min-width: 641px) and (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 640px) {
    width: 100%;
  }
`;

const GreyButton = styled(BlueButton)`
  background-color: #1f2a37;
  color: #9ca3af;
  border: 1px solid #4b5563;
  display: flex;
  gap: 6px;
`;

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <LeftItem>
          <Title>{textTitle}</Title>
          <TextSupporting>{supportingText}</TextSupporting>
          <Buttons>
            <BlueButton>Donate now</BlueButton>
            <GreyButton>
              <VideoCamera />
              Learn more
            </GreyButton>
          </Buttons>
          <SponsorsContainer>
            <Sponsors>Sponsors:</Sponsors>
            <SvgContainer>
              <Intel />
              <FedEx />
              <Visa />
              <Disney />
            </SvgContainer>
          </SponsorsContainer>
        </LeftItem>
        <RightItem>
          <Slider images={images} />
        </RightItem>
      </HeroContent>
    </HeroContainer>
  );
};
export default Hero;
