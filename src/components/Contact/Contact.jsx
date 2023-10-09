import styled from "styled-components";
import Button from "../Reusable/Button";

const ContactContainer = styled.div`
  display: flex;
  width: 100%;
  /* padding: 96px 0px; */
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const ContactWrapper = styled.div`
  display: flex;
  width: 1280px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 64px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const Heading = styled.h1`
  width: 672px;
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 36px;
  font-style: normal;
  font-weight: 800;
  line-height: 125%; /* 45px */
  letter-spacing: -0.36px;
  margin: 0;
`;

const SupportingText = styled.p`
  width: 672px;
  color: #9ca3af;
  text-align: center;
  margin: 0;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;

const ContactForm = styled.form`
  display: flex;
  width: 640px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  align-self: stretch;
`;

const InputField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`;

const Label = styled.label`
  align-self: stretch;
  color: #fff;

  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
`;

const Input = styled.input`
  display: flex;
  padding: 14px 16px;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  border-radius: 8px;
  border: 1px solid #4b5563;
  background: #374151;

  &::placeholder {
    font-size: 16px;
    font-weight: 400;
    color: #9ca3af;
    line-height: 150%;
  }
`;

const TextareaField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  align-self: stretch;
`;

const Textarea = styled.textarea`
  height: 162px !important;
  width: 640px !important;
  background: #374151;
  border: 1px solid #4b5563;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  color: #9ca3af;
  padding: 13px 20px;

  box-sizing: border-box;
`;

function Contact() {
  return (
    <ContactContainer>
      <ContactWrapper>
        <Header>
          <Heading>Contact us</Heading>
          <SupportingText>
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about our Business plan? Let us know.
          </SupportingText>
        </Header>
        <ContactForm>
          <Row>
            <InputField>
              <Label>Your email</Label>
              <Input type="email" placeholder="name@flowbite.com" />
            </InputField>
            <InputField>
              <Label>Subject</Label>
              <Input
                type="text"
                placeholder="Let us know how we can help you"
              />
            </InputField>
          </Row>
          <Row>
            <TextareaField>
              <Label>Your message</Label>
              <Textarea rows="4" cols="50" />
            </TextareaField>
          </Row>

          <Button type="submit" version="primary">
            Send message
          </Button>
        </ContactForm>
      </ContactWrapper>
    </ContactContainer>
  );
}

export default Contact;
