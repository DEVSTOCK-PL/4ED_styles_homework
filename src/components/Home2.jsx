// import videoCamera from "../images/videoCamera.png";
// import intel from "../images/intel.png";
// import fedex from "../images/fedex.png";
// import visa from "../images/visa.png";
// import disnay from "../images/disnay.png";
// import carousel from "../images/carousel.png";
// import littleArow from "../images/littleArow.png";

// import PictureCard from "./PictureCard";
// import BreakPoints from "./BreakPoints";
// import { Form } from "react-router-dom";

import styled from "styled-components";

import {
  Button,
  CenteredLink,
  Container,
  Heading,
  SupportingText,
} from "./styleElements";

import {
  videoCamera,
  intel,
  fedex,
  visa,
  disnay,
  carousel,
  littleArow,
} from "../images";

import { PictureCard, BreakPoints } from "../components";

const Hero = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: ${BreakPoints.tablet}) {
    display: flex;
    flex-direction: column;
  }
`;

const LeftContent = styled.div`
  padding-right: 30px;
  @media (max-width: ${BreakPoints.smallDesktop}) {
    width: 100%;
    padding-right: 0px;
  }
`;

const Buttons = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
`;
const VideoCameraButton = styled(Button)`
  background-color: #1f2a37;
  color: #9ca3af;
  display: flex;
`;
const RightPhoto = styled.div`
  @media (max-width: ${BreakPoints.desktop}) {
    display: flex;
    align-items: center;
  }

  img {
    width: 576px;
    height: 360px;
    @media (max-width: ${BreakPoints.desktop}) {
      width: 476px;
      height: 270px;
    }
    @media (max-width: ${BreakPoints.smallDesktop}) {
      width: 470px;
      height: 270px;
      margin: 30px 20px;
    }
    @media (max-width: ${BreakPoints.tablet}) {
      width: 100%;
      /* height: 100%; */
    }
  }
`;
const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #9ca3af;
  margin-bottom: 20px;
`;
const SponsorsText = styled.div`
  color: #6b7280;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;
const SponsoredLogo = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 10px;

  img {
    display: block;
    width: 86px;
    height: 33.36px;
    margin-right: 20px;
    @media (max-width: ${BreakPoints.smallDesktop}) {
      width: 56px;
      height: 23.36px;
      margin-right: 10px;
    }
  }
`;
const SocialProof = styled.div`
  background-color: #1f2a37;
  display: flex;
  justify-content: space-evenly;
  padding: 12px 0px;
  margin: 70px 100px;
  border: 2px solid #374151;
  border-radius: 8px;
  @media (max-width: ${BreakPoints.desktop}) {
    margin: 70px 100px;
  }
  @media (max-width: ${BreakPoints.smallDesktop}) {
    margin: 40px 100px;
    /* margin: 0px; */
  }
  @media (max-width: ${BreakPoints.tablet}) {
    display: flex;
    flex-direction: column;
  }
`;
const Stat = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HorizontalRule = styled.hr`
  width: 2px;
  border: none;
  background-color: #374151;
`;
const RowSupportingText = styled.div`
  color: #9ca3af;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
  @media (max-width: ${BreakPoints.smallDesktop}) {
    font-size: 15px;
    font-weight: 400;
  }
`;

function Home2() {
  return (
    <>
      <Container>
        <Hero>
          <LeftContent>
            <Heading>Making earth cooler for people, nature, climate</Heading>
            <SupportingText>
              Protecting the planet and its natural resources for future
              generations, by reducing pollution, promoting sustainability, and
              conserving energy and resources.
            </SupportingText>
            <Buttons>
              <Button>Donate now</Button>
              <VideoCameraButton>
                {" "}
                <img src={videoCamera} alt="video-camera-logo" />
                Learn more
              </VideoCameraButton>
            </Buttons>
            <Divider></Divider>
            <SponsorsText>Sponsors</SponsorsText>
            <SponsoredLogo>
              <img src={intel} alt="intel-logo" />
              <img src={fedex} alt="fedex-logo" />
              <img src={visa} alt="visa-logo" />
              <img src={disnay} alt="disnay-logo" />
            </SponsoredLogo>
          </LeftContent>
          <RightPhoto>
            <img src={carousel} alt="carousel-img" />
          </RightPhoto>
        </Hero>
        <SocialProof>
          <Stat>
            <Heading>104M</Heading>
            <RowSupportingText>Trees planted</RowSupportingText>
          </Stat>
          <HorizontalRule />
          <Stat>
            <Heading>20k+</Heading>
            <RowSupportingText>Partners & Donors</RowSupportingText>
          </Stat>
          <HorizontalRule />
          <Stat>
            <Heading>90M</Heading>
            <RowSupportingText>Tonnes of Carbon Stored</RowSupportingText>
          </Stat>
          <HorizontalRule />
          <Stat>
            <Heading>50+</Heading>
            <RowSupportingText>People-Powered Projects</RowSupportingText>
          </Stat>
        </SocialProof>
        <PictureCard />
        <CenteredLink>
          <a href="url">View all fundraising events</a>
          <img src={littleArow} alt="littleArow-img" />
        </CenteredLink>
      </Container>
    </>
  );
}
export default Home2;
