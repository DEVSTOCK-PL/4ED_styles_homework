import styled from "styled-components";
import Container from "./styleElements/Container";
import Button from "./styleElements/Button";
import Heading from "./styleElements/Heading";
import SupportingText from "./styleElements/SupportingText";
import BreakPoints from "./BreakPoints";


const NewContainer = styled(Container)`
  padding-bottom: 0px;
  padding: 0px 0px;
  @media (max-width: ${BreakPoints.tablet}) {
    width: 100%;
    padding: 0px 20px;
  }
`;

const CenterHeading = styled(Heading)`
  text-align: center;
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

const CenterSupportingText = styled(SupportingText)`
  text-align: center;
`;

function Events() {
  return (
    <Container>
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
    </Container>
  );
}

export default Events;
