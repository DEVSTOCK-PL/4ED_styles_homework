// import { Link } from "react-router-dom";
import styled from "styled-components";
import PictureCard from "./PictureCard";

import {
  CenteredLink,
  Container,
  Heading,
  SupportingText,
} from "./styleElements";

import { littleArow, carousel, mockup1News, mockupLeft } from "../images";

import { BreakPoints } from "../components";

const EventsContainer = styled(Container)`
  padding-bottom: 0px;
`;
const PictureCardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: ${BreakPoints.desktop}) {
    padding: 20px;
  }
  @media (max-width: ${BreakPoints.tablet}) {
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
const CenterSupportingText = styled(SupportingText)`
  text-align: center;
`;

const Blog = styled.div`
  background-color: #1f2a37;
  border-top: 1px solid #374151;
  border-bottom: 2px solid #374151;
  padding: 50px 0px;
`;
const Row = styled.div`
  background-color: #1f2a37;
  display: flex;
  @media (max-width: ${BreakPoints.smallDesktop}) {
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
  padding: 40px 30px;
  @media (max-width: ${BreakPoints.smallDesktop}) {
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
      <Blog>
        <CenterHeading>Latest news & events</CenterHeading>
        <CenterSupportingText>
          We use an agile approach to test assumptions and connect with the
          needs of your audience early and often.
        </CenterSupportingText>
        <Row>
          <ColumnContainer>
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

          <ColumnContainer>
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

          <ColumnContainer>
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
            <div className="3 kolumna">
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
            <div className="3 kolumna">
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
