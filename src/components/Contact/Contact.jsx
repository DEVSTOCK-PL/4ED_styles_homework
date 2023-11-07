import { useEffect } from "react";
import styled from "styled-components";
import useForm from "../hooks/useForm";
import { useSnackbar } from "notistack";
import Button from "../Reusable/Button";

const ContactContainer = styled.div`
  display: flex;
  width: 100%;
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
  color: ${({ theme }) => theme.title};
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
  color: ${({ theme }) => theme.text};
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
  color: ${({ theme }) => theme.title};

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
  background: ${({ theme }) => theme.toggleBorder};

  &::placeholder {
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.text};
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
  background: ${({ theme }) => theme.toggleBorder};
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
  const { formik, status } = useForm();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (status === "success") {
      enqueueSnackbar("The message was sent!", { variant: "success" });
    } else if (status === "error") {
      enqueueSnackbar("There was an error while sending the message.", {
        variant: "error",
      });
    }
  }, [status, enqueueSnackbar]);

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
        <ContactForm onSubmit={formik.handleSubmit}>
          <Row>
            <InputField>
              <Label htmlFor="email">Your email</Label>
              <Input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="name@flowbite.com"
                {...formik.getFieldProps("email")}
              />
            </InputField>
            <InputField>
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                type="text"
                placeholder="Let us know how we can help you"
                {...formik.getFieldProps("subject")}
              />
            </InputField>
          </Row>
          <Row>
            <TextareaField>
              <Label htmlFor="Textarea">Your message</Label>
              <Textarea
                id="Textarea"
                rows="4"
                cols="50"
                {...formik.getFieldProps("message")}
              />
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
