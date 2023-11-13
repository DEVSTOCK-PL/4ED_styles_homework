import styled from "styled-components";
import useDonationLogic from "../hooks/useDonationLogic";
import { useContext } from "react";
import { AppContext } from "../hooks/AppContext";
import ProgressBar from "../components/ProgressBar";

import image1 from "../assets/foto/mockup2.png";
import image2 from "../assets/foto/mockup5.png";
import image3 from "../assets/foto/mockup6.png";

import { Share } from "../assets/svg_components";

const image88 = window.innerWidth <= 768 ? image3 : image2;

const textTitle1 = "Fundraising events";
const textSupporting1 =
  "Flowbite helps you connect with friends, family and communities of people who share your interests. ";
const textTitle2 = "Thank you for supporting our lifesaving work.";
const textSupporting2 =
  "Our fundraisers are a creative bunch when it comes to taking on challenges, from beard shaves and bake sales to stand-up comedy and streaming marathons. There is something for everyone.";

const Container = styled.div`
  /* background-color: #111928; */
  width: 100%;
  max-width: 1440px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 90px;

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
  gap: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  @media (min-width: 1025px) and (max-width: 1280px) {
    height: auto;
    padding-bottom: 40px;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    height: auto;
    padding-bottom: 40px;
  }
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
  height: 121px;
  gap: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 641px) and (max-width: 768px) {
    height: auto;
  }
  @media (max-width: 640px) {
    height: auto;
  }
`;
const Cards = styled.div`
  width: 100%;
  height: auto;
  gap: 48px;
  display: flex;
  justify-content: space-between;

  @media (min-width: 1025px) and (max-width: 1280px) {
    height: auto;
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
    gap: 16px;
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
  justify-content: center;
  gap: 16px;
  padding-bottom: 20px;
  padding-top: 20px;

  @media (min-width: 1025px) and (max-width: 1280px) {
    padding-bottom: 20px;
    padding-top: 30px;
  }
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
const Buttons = styled.div`
  max-width: 552px;
  width: 90%;
  height: 41px;
  gap: 16px;
  display: flex;

  @media (max-width: 640px) {
    height: auto;
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 641px) and (max-width: 768px) {
    height: auto;
    flex-direction: column;
    align-items: center;
  }
`;

const BlueButton = styled.button`
  width: 121px;
  height: 41px;
  border-radius: 8px;
  color: #fff;
  background-color: ${(props) => (props.isDisabled ? "red" : "#1A56DB")};
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:active {
    border: ${(props) =>
      props.isDisabled ? "1px solid red" : "1px solid #1a56db"};
  }

  @media (min-width: 641px) and (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 640px) {
    width: 100%;
  }
`;

const GreyButton = styled(BlueButton)`
  width: 210px;
  background-color: #1f2a37;
  color: #9ca3af;
  border: 1px solid #4b5563;
  display: flex;
  gap: 6px;

  @media (min-width: 641px) and (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 640px) {
    width: 100%;
  }
`;

const Title1 = styled.p`
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

const TextSupporting1 = styled.p`
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

const CtaTwoDonate = () => {
  const { isDarkTheme } = useContext(AppContext);
  const {
    donate1,
    donateUp1,
    donate2,
    donateUp2,
    donate3,
    donateUp3,
    donate4,
    donateUp4,
  } = useDonationLogic();

  const isDonate1Exceeded = donate1 >= 400000 ? true : false;
  console.log("isDonate1Exceeded", isDonate1Exceeded);

  const isDonate2Exceeded = donate2 >= 150000 ? true : false;
  console.log("isDonate2Exceeded", isDonate2Exceeded);

  const isDonate3Exceeded = donate3 >= 400000 ? true : false;
  console.log("isDonate3Exceeded", isDonate3Exceeded);

  const isDonate4Exceeded = donate4 >= 150000 ? true : false;
  console.log("isDonate4Exceeded", isDonate4Exceeded);

  return (
    <Container>
      <Content>
        <Heading>
          <Title1>{textTitle1}</Title1>
          <TextSupporting1>{textSupporting1}</TextSupporting1>
        </Heading>
        <Cards>
          <Card>
            <ImgBox>
              <Img src={image1} alt="Trees plantd" />
            </ImgBox>
            <ProgressBarContainer>
              <ProgressBar
                donors="3473"
                colected={donate1}
                goal="400000"
                isDarkTheme={isDarkTheme}
              />
            </ProgressBarContainer>
            <Title2>{textTitle2}</Title2>
            <TextSupporting2>{textSupporting2}</TextSupporting2>
            <Buttons>
              <BlueButton
                onClick={isDonate1Exceeded ? null : donateUp1}
                isDisabled={isDonate1Exceeded}>
                {isDonate1Exceeded ? "STOP" : "Donate now"}
              </BlueButton>
              <GreyButton>
                <Share />
                Share this Fundraiser
              </GreyButton>
            </Buttons>
          </Card>
          <Card>
            <ImgBox>
              <Img src={image88} />
            </ImgBox>
            <ProgressBarContainer>
              <ProgressBar
                donors="473"
                colected={donate2}
                goal="150000"
                isDarkTheme={isDarkTheme}
              />
            </ProgressBarContainer>
            <Title2>{textTitle2}</Title2>
            <TextSupporting2>{textSupporting2}</TextSupporting2>
            <Buttons>
              <BlueButton
                onClick={isDonate2Exceeded ? null : donateUp2}
                isDisabled={isDonate2Exceeded}>
                {isDonate2Exceeded ? "STOP" : "Donate now"}
              </BlueButton>
              <GreyButton>
                <Share />
                Share this Fundraiser
              </GreyButton>
            </Buttons>
          </Card>
        </Cards>
        <Cards>
          <Card>
            <ImgBox>
              <Img src={image88} />
            </ImgBox>
            <ProgressBarContainer>
              <ProgressBar
                donors="3473"
                colected={donate3}
                goal="400000"
                isDarkTheme={isDarkTheme}
              />
            </ProgressBarContainer>
            <Title2>{textTitle2}</Title2>
            <TextSupporting2>{textSupporting2}</TextSupporting2>
            <Buttons>
              <BlueButton
                onClick={isDonate3Exceeded ? null : donateUp3}
                isDisabled={isDonate3Exceeded}>
                {isDonate3Exceeded ? "STOP" : "Donate now"}
              </BlueButton>
              <GreyButton>
                <Share />
                Share this Fundraiser
              </GreyButton>
            </Buttons>
          </Card>
          <Card>
            <ImgBox>
              <Img src={image1} />
            </ImgBox>
            <ProgressBarContainer>
              <ProgressBar
                donors="473"
                colected={donate4}
                goal="150000"
                isDarkTheme={isDarkTheme}
              />
            </ProgressBarContainer>
            <Title2>{textTitle2}</Title2>
            <TextSupporting2>{textSupporting2}</TextSupporting2>
            <Buttons>
              <BlueButton
                onClick={isDonate4Exceeded ? null : donateUp4}
                isDisabled={isDonate4Exceeded}>
                {isDonate4Exceeded ? "STOP" : "Donate now"}
              </BlueButton>
              <GreyButton>
                <Share />
                Share this Fundraiser
              </GreyButton>
            </Buttons>
          </Card>
        </Cards>
      </Content>
    </Container>
  );
};
export default CtaTwoDonate;
