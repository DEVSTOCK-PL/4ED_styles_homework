import styled from "styled-components";
import Container from "./styleElements/Container";
import Button from "./styleElements/Button";
import Heading from "./styleElements/Heading";
import SupportingText from "./styleElements/SupportingText";

import videoCamera from "../images/videoCamera.png";
import intel from "../images/intel.png";
import fedex from "../images/fedex.png";
import visa from "../images/visa.png";
import disnay from "../images/disnay.png";
import carousel from "../images/carousel.png";

const breakpoints = {
  mobile: "320px",
  tablet: "768px",
  smallDesktop: "900px",
  desktop: "1160px",
  Largedesktop: "1280px",
};
// @media (max-width: ${breakpoints.tablet}) {
//   font-size: 18px;
// }

const Hero = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: ${breakpoints.smallDesktop}) {
    display: flex;
    flex-direction: column;
  }
`;

const LeftContent = styled.div`
  width: 50%;
  padding-right: 30px;
  @media (max-width: ${breakpoints.smallDesktop}) {
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
  @media (max-width: ${breakpoints.desktop}) {
    display: flex;
    align-items: center;
  }

  img {
    width: 576px;
    height: 360px;
    @media (max-width: ${breakpoints.desktop}) {
      width: 476px;
      height: 270px;
    }
    @media (max-width: ${breakpoints.smallDesktop}) {
    width: 100%;
    height: 370px;
    margin: 40px;
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
  @media (max-width: ${breakpoints.desktop}) {
    margin: 70px 100px;
  }
  @media (max-width: ${breakpoints.smallDesktop}) {
    margin: 0px;
  }
`;
const Stat = styled.div`
  margin: 0 auto;
`;
const RowHeading = styled.div`
  font-size: 36px;
  font-weight: 800;
  line-height: 45px;
  letter-spacing: -0.01em;
  text-align: center;
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
`;

function Home() {
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
            <RowHeading>104M</RowHeading>
            <RowSupportingText>Trees planted</RowSupportingText>
          </Stat>
          <HorizontalRule />
          <Stat>
            <RowHeading>20k+</RowHeading>
            <RowSupportingText>Partners & Donors</RowSupportingText>
          </Stat>
          <HorizontalRule />
          <Stat>
            <RowHeading>90M</RowHeading>
            <RowSupportingText>Tonnes of Carbon Stored</RowSupportingText>
          </Stat>
          <HorizontalRule />
          <Stat>
            <RowHeading>50+</RowHeading>
            <RowSupportingText>People-Powered Projects</RowSupportingText>
          </Stat>
        </SocialProof>
      </Container>
    </>
  );
}
export default Home;
