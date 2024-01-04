import styled from "styled-components";
import { useContext } from "react";

import { StyleContext } from "../../App";

import PictureCard from "../PictureCard";
import {
  CenteredLink,
  Container,
  Heading,
  SupportingText,
} from "../styleElements";

import { littleArow, carousel, mockup1News, mockupLeft } from "../../images";

import { breakPoints } from "..";
import { colors } from "../colors";

const { desktop, smallDesktop, tablet } = breakPoints;

const EventsContainer = styled(Container)`
  padding-bottom: 0px;
`;

const PictureCardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: ${desktop}) {
    padding: 20px;
  }
  @media (max-width: ${tablet}) {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 15px;
  }
`;

const HorizontalRule = styled.hr`
  width: 1px;
  border: none;
  background-color: #374151;
`;
const CenterHeading = styled(Heading)`
  text-align: center;
`;
<div id="root"></div>;
const CenterSupportingText = styled(SupportingText)`
  text-align: center;
`;

const Blog = styled.div`
  background-color: ${(props) =>
    props.darkTheme ? "#1f2a37" : colors.LightBackgroundColorTwo};
  border-top: 1px solid #374151;
  border-bottom: 2px solid #374151;
  padding: 50px 0px;
`;
const Row = styled.div`
  display: flex;
  @media (max-width: ${smallDesktop}) {
    display: block;
  }
`;
const ImageWrapper = styled.div`
  width: 100%;
  border-radius: 8px;
  img {
    width: 100%;
  }
`;

const ColumnContainer = styled.div`
  background-color: ${(props) =>
    props.darkTheme ? "#1f2a37" : colors.LightBackgroundColorTwo};
  padding: 40px 30px;
  @media (max-width: ${smallDesktop}) {
    padding: 0px 30px;
  }
`;

const ColumnLink = styled(CenteredLink)`
  display: flex;
  justify-content: flex-start;
  margin-top: 0px;
  margin-bottom: 30px;
`;

function Events() {
  const darkTheme = useContext(StyleContext);
  return (
    <EventsContainer>
      <div>
        <CenterHeading>Fundraising events</CenterHeading>
        <CenterSupportingText>
          Flowbite helps you connect with friends, family and communities of
          people who share your interests.
        </CenterSupportingText>

        <PictureCardsContainer>
          <div>
            <PictureCard imageSrc={mockup1News} />
            <PictureCard imageSrc={mockupLeft} />
          </div>
          <div>
            <PictureCard imageSrc={mockupLeft} />
            <PictureCard imageSrc={mockup1News} />
          </div>
        </PictureCardsContainer>

        <CenteredLink>
          <a href="url">View all fundraising events</a>
          <img src={littleArow} alt="littleArow-img" />
        </CenteredLink>
      </div>
      <Blog darkTheme={darkTheme}>
        <CenterHeading>Latest news & events</CenterHeading>
        <CenterSupportingText>
          We use an agile approach to test assumptions and connect with the
          needs of your audience early and often.
        </CenterSupportingText>
        <Row>
          <ColumnContainer darkTheme={darkTheme}>
            <div>
              <ImageWrapper>
                <img src={carousel} alt="carusel-img" />
              </ImageWrapper>
              <Heading>SEO Basics: Beginners Guide to SEO Success</Heading>
              <SupportingText>
                Static websites are now used to bootstrap lots of websites and
                are becoming the basis for a variety of tools that even
                influence both web designers and developers.
              </SupportingText>
              <ColumnLink>
                <a href="url">Read more</a>
                <img src={littleArow} alt="littleArow-img" />
              </ColumnLink>
            </div>
          </ColumnContainer>

          <HorizontalRule />

          <ColumnContainer darkTheme={darkTheme}>
            <div>
              <Heading>How to quickly deploy a static website</Heading>
              <SupportingText>
                Static websites are now used to bootstrap lots of websites and
                are becoming the basis for a variety of tools that even
                influence both web designers and developers.
              </SupportingText>
              <ColumnLink>
                <a href="url">Read more</a>
                <img src={littleArow} alt="littleArow-img" />
              </ColumnLink>
            </div>
            <div>
              <Heading>
                What is SEO? Search Engine Optimization Explained
              </Heading>
              <SupportingText>
                Static websites are now used to bootstrap lots of websites and
                are becoming the basis for a variety of tools that even.
              </SupportingText>
              <ColumnLink>
                <a href="url">Read more</a>
                <img src={littleArow} alt="littleArow-img" />
              </ColumnLink>
            </div>
            <div className="2 kolumna">
              <Heading>
                Spotifys Car Thing available to all premium users
              </Heading>
              <SupportingText>
                Starting Tuesday any Spotify Premium user can buy the streaming
                services first piece of hardware.
              </SupportingText>
              <ColumnLink>
                <a href="url">Read more</a>
                <img src={littleArow} alt="littleArow-img" />
              </ColumnLink>
            </div>
          </ColumnContainer>

          <HorizontalRule />

          <ColumnContainer darkTheme={darkTheme}>
            <div>
              <Heading>How to Rank Higher on Google (6 Easy Steps)</Heading>
              <SupportingText>
                Static websites are now used to bootstrap lots of websites and
                are becoming the basis for a variety of tools that even
                influence both web designers and developers.
              </SupportingText>
              <ColumnLink>
                <a href="url">Read more</a>
                <img src={littleArow} alt="littleArow-img" />
              </ColumnLink>
            </div>
            <div>
              <Heading>
                12 SEO Best Practices That Everyone Should Follow
              </Heading>
              <SupportingText>
                Static websites are now used to bootstrap lots of websites and
                are becoming the basis.
              </SupportingText>
              <ColumnLink>
                <a href="url">Read more</a>
                <img src={littleArow} alt="littleArow-img" />
              </ColumnLink>
            </div>
            <div>
              <Heading>How to schedule your Tweets to send later</Heading>
              <SupportingText>
                Static websites are now used to bootstrap lots of websites and
                are becoming the basis for a variety of tools that even.
              </SupportingText>
              <ColumnLink>
                <a href="url">Read more</a>
                <img src={littleArow} alt="littleArow-img" />
              </ColumnLink>
            </div>
          </ColumnContainer>
        </Row>
      </Blog>
    </EventsContainer>
  );
}

export default Events;
