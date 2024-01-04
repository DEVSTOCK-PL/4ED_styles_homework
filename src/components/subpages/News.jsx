import styled from "styled-components";

import { Button, Container, Heading, SupportingText } from "../styleElements";

import {
  littleWhiteArow,
  mockup1News,
  mockup2News,
  mockup3News,
} from "../../images";

import { breakPoints } from "..";

const { desktop, smallDesktop, tablet } = breakPoints;

const Row = styled.div`
  display: flex;
  @media (max-width: ${desktop}) {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  }
  @media (max-width: ${smallDesktop}) {
    display: flex;
    align-items: center;
  }
  @media (max-width: ${tablet}) {
    display: flex;
    flex-direction: column;
  }
`;
const RowReverse = styled(Row)`
  display: flex;
  flex-direction: row-reverse;
  @media (max-width: ${tablet}) {
    display: flex;
    flex-direction: column;
  }
`;

const ArrowButton = styled(Button)`
  img {
    margin-left: 5px;
  }
`;

const MocupImage = styled.img`
  width: 540.46px;
  height: 406.78px;
  border-radius: 8px;
  padding-right: 50px;
  @media (max-width: ${desktop}) {
    width: 440.46px;
    height: 306.78px;
  }
  @media (max-width: ${smallDesktop}) {
    padding-right: 20px;
    width: 390.46px;
    height: 300.78px;
  }
  @media (max-width: ${tablet}) {
    width: 100%;
    height: 100%;
  }
`;
const MiddleMocupImage = styled(MocupImage)`
  padding-right: 0px;
  padding-left: 50px;
  @media (max-width: ${smallDesktop}) {
    padding-left: 20px;
  }
  @media (max-width: ${tablet}) {
    padding: 0px;
    width: 100%;
    height: 100%;
  }
`;

function News() {
  return (
    <Container>
      <Row>
        <div>
          <MocupImage src={mockup1News} alt="mockup.left" />
        </div>
        <div>
          <Heading>
            Flowbite Green is a climate change non-profit organization.
          </Heading>
          <SupportingText>
            Flowbite helps you connect with friends, family and communities of
            people who share your interests. Connecting with your friends and
            family as well as discovering new ones is easy with features like
            Groups.
          </SupportingText>
          <ArrowButton>
            Get involved
            <img src={littleWhiteArow} alt="littleArow" />
          </ArrowButton>
          <Button>Learn more</Button>
        </div>
      </Row>
      <RowReverse>
        <div>
          <MiddleMocupImage src={mockup2News} alt="mockup.left" />
        </div>
        <div>
          <Heading>
            Protect our earth against climate change and pollution.
          </Heading>
          <SupportingText>
            Flowbite helps you connect with friends, family and communities of
            people who share your interests. Connecting with your friends and
            family as well as discovering new ones is easy with features like
            Groups.
          </SupportingText>
          <ArrowButton>
            View all activities
            <img src={littleWhiteArow} alt="littleArow" />
          </ArrowButton>
        </div>
      </RowReverse>
      <Row>
        <div>
          <MocupImage src={mockup3News} alt="mockup.left" />
        </div>
        <div className="contemt">
          <Heading>
            Together we can restore our earth against climate changen.
          </Heading>
          <SupportingText>
            Flowbite helps you connect with friends, family and communities of
            people who share your interests. Connecting with your friends and
            family as well as discovering new ones is easy with features like
            Groups.
          </SupportingText>
          <ArrowButton>
            Read more
            <img src={littleWhiteArow} alt="littleArow" />
          </ArrowButton>
        </div>
      </Row>
    </Container>
  );
}

export default News;
