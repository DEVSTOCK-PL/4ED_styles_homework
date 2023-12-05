import styled from "styled-components";

import { useContext } from "react";
import { StyleContext } from "../../App";

import { colors } from "../colors";

import { Button, Container, Heading, SupportingText } from "../styleElements";

import { breakPoints, CustomerLogos } from "..";

const { tablet } = breakPoints;

const NewContainer = styled(Container)`
  max-width: 1440px;
  padding-bottom: 0px;
  padding: 0px 0px;
  @media (max-width: ${tablet}) {
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
  @media (max-width: ${tablet}) {
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
    /* background-color: #4b5563; */
    background-color: #c6d0dd;
    background-color: ${(props) => (props.darkTheme ? "#4b5563" : colors.LightBackgroundColorThree)};
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
  /* background-color: #4b5563; */
  background-color: ${(props) => (props.darkTheme ? "#4b5563" : colors.LightBackgroundColorThree)};
  background-color: ${(props) => (props.darkTheme ? "#4b5563" : colors.LightBackgroundColorThree)};
  width: 100%;
  height: 162px;
  color: #ffffff;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid #4b5563;
  resize: none;
`;

function Events() {
  const darkTheme = useContext(StyleContext);

  return (
    <NewContainer>
      <Row>
        <CenterHeading>Contact us</CenterHeading>
        <CenterSupportingText>
          Got a technical issue? Want to send feedback about a beta feature?
          Need details about our Business plan? Let us know.
        </CenterSupportingText>
        <FormContainer darkTheme={darkTheme}>
          <form action="contact" className="">
            <FormInput darkTheme={darkTheme}>
              <label htmlFor="email">Your email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="name@flowbite.com"
                autoCapitalize="email"
              />
            </FormInput>
            <FormInput darkTheme={darkTheme}>
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="text"
                autoCapitalize="subject"
                placeholder="Let us know how we can help you"
              />
            </FormInput>
            <FormInput>
              <label htmlFor="message">Your message</label>
              <LargeMessageInput
                darkTheme={darkTheme}
                id="message"
                type="text"
                name="text"
                autoCapitalize="message"
              />
            </FormInput>
          </form>
        </FormContainer>
        <Button>Send message</Button>
      </Row>
      <CustomerLogos />
    </NewContainer>
  );
}

export default Events;
