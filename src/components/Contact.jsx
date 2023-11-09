import styled from "styled-components";

import { Button, Container, Heading, SupportingText } from "./styleElements";
import {
  bmw,
  cocacola,
  disnay,
  fedex,
  intel,
  nestle,
  netflix,
  shell,
  spotify,
  stripe,
  tesla,
  twitch,
} from "../images";

import BreakPoints from "./BreakPoints";

import SponsorsCards from "./SponsorCard";

const NewContainer = styled(Container)`
max-width: 1440px;
  padding-bottom: 0px;
  padding: 0px 0px;
  @media (max-width: ${BreakPoints.tablet}) {
    width: 100%;
    padding: 0px 20px;
  }
`;

const CenterHeading = styled(Heading)`
  text-align: center;
  padding-bottom: 5px;
`;
const CenterSupportingText = styled(SupportingText)`
  text-align: center;
  padding: 0px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  padding-bottom: 50px;
  width: 60%;
  margin: 0 auto;
  @media (max-width: ${BreakPoints.tablet}) {
    width: 100%;
  }
  Button {
    width: 160px;
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormInput = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  width: 100%;
  label {
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
  }
  input {
    color: #ffffff;
    font-size: 16px;
    background-color: #4b5563;
    border-radius: 8px;
    border: 1px solid #4b5563;
    width: 100%;
    height: 52px;
  }
  input::placeholder {
    padding-left: 20px;
    color: #9ca3af;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }
`;

const LargeMessageInput = styled.textarea`
  background-color: #4b5563;
  width: 100%;
  height: 162px;
  color: #ffffff;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid #4b5563;
  resize: none;
`;

const SponsorsCardsContainer = styled.div`
  background-color: #1f2a37;

  > div:first-child {
    padding-top: 60px;
    padding-bottom: 40px;
  }
`;

const SponsorsCardsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

function Events() {
  return (
    <NewContainer>
      <Row>
        <CenterHeading>Contact us</CenterHeading>
        <CenterSupportingText>
          Got a technical issue? Want to send feedback about a beta feature?
          Need details about our Business plan? Let us know.
        </CenterSupportingText>
        <FormContainer>
          <form action="contact" className="">
            <FormInput>
              <label htmlFor="email">Your email</label>
              <input type="email" placeholder="name@flowbite.com" />
            </FormInput>
            <FormInput>
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                placeholder="Let us know how we can help you"
              />
            </FormInput>
            <FormInput>
              <label htmlFor="message">Your message</label>
              <LargeMessageInput type="text" />
            </FormInput>
          </form>
        </FormContainer>
        <Button>Send message</Button>
      </Row>
      <SponsorsCardsContainer>
        <div>
          <CenterHeading>Donors, Partners & Sponsors</CenterHeading>
          <CenterSupportingText>
            Here at flowbite we focus on markets where technology, innovation,
          </CenterSupportingText>
          <CenterSupportingText>
            and capital can unlock long-term value.
          </CenterSupportingText>
        </div>

        <SponsorsCardsWrapper>
          <div>
            <SponsorsCards img={stripe} />
            <SponsorsCards img={intel} />
            <SponsorsCards img={fedex} />
          </div>
          <div>
            <SponsorsCards img={spotify} />
            <SponsorsCards img={shell} />
            <SponsorsCards img={disnay} />
          </div>
          <div>
            <SponsorsCards img={tesla} />
            <SponsorsCards img={netflix} />
            <SponsorsCards img={bmw} />
          </div>
          <div>
            <SponsorsCards img={twitch} />
            <SponsorsCards img={nestle} />
            <SponsorsCards img={cocacola} />
          </div>
        </SponsorsCardsWrapper>
      </SponsorsCardsContainer>
    </NewContainer>
  );
}

export default Events;
