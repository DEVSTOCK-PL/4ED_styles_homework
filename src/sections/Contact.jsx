import styled from "styled-components";
import { useSnackbar } from "notistack";
import useContactForm from "../hooks/useContactForm";

const text1 = "Contact us";
const text2 =
  "Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.";

const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  height: 855px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 1025px) and (max-width: 1280px) {
    max-width: 1280px;
    height: 855px;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    max-width: 1024px;
    height: auto;
    padding-top: 60px;
    padding-bottom: 60px;
  }
  @media (min-width: 641px) and (max-width: 768px) {
    max-width: 768px;
    height: auto;
    padding-top: 60px;
    padding-bottom: 60px;
  }
  @media (max-width: 640px) {
    max-width: 640px;
    height: auto;
    padding-top: 60px;
    padding-bottom: 60px;
  }
`;

const Content = styled.div`
  width: 89%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 641px) and (max-width: 768px) {
    width: 443px;
    height: auto;
  }
  @media (max-width: 640px) {
    width: 343px;
    height: auto;
  }
`;

const Heading = styled.div`
  width: 53%;
  height: auto;
  gap: 16px;
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;

  @media (min-width: 641px) and (max-width: 768px) {
    width: 343px;
    height: auto;
    padding-bottom: 20px;
  }
  @media (max-width: 640px) {
    width: 343px;
    height: auto;
    padding-bottom: 20px;
  }
`;

const Form = styled.form`
  width: 50%;
  height: 478px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 641px) and (max-width: 768px) {
    width: 343px;
    height: auto;
  }
  @media (max-width: 640px) {
    width: 343px;
    height: auto;
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
    line-height: 45px;
  }
  @media (max-width: 640px) {
    font-size: 30px;
    line-height: 45px;
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

const InputBox = styled.div`
  width: 99%;
  height: auto;

  @media (min-width: 641px) and (max-width: 768px) {
    width: 343px;
  }
  @media (max-width: 640px) {
    width: 343px;
  }
`;

const Label = styled.div`
  width: 100%;
  height: 21px;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  text-align: left;
  margin-bottom: 8px;

  @media (min-width: 641px) and (max-width: 768px) {
    width: 343px;
  }
  @media (max-width: 640px) {
    width: 343px;
  }
`;

const Input = styled.input`
  height: 52px;
  width: 100%;
  background-color: #374151;
  border: 1px solid #4b5563;
  border-radius: 8px;
  font-size: 16px;
  line-height: 24px;
  color: #9ca3af;
  padding-left: 10px;
  padding-top: 4px;
  box-sizing: border-box;

  ::placeholder {
    font-size: 16px;
    line-height: 24px;
    color: #9ca3af;
  }

  @media (min-width: 641px) and (max-width: 768px) {
    width: 343px;
  }
  @media (max-width: 640px) {
    width: 343px;
  }
`;
const Textarea = styled.textarea`
  height: 162px;
  width: 100%;
  background-color: #374151;
  border: 1px solid #4b5563;
  border-radius: 8px;
  font-size: 16px;
  line-height: 24px;
  color: #9ca3af;
  padding-left: 10px;
  padding-top: 4px;
  box-sizing: border-box;

  @media (max-width: 640px) {
    width: 343px;
  }
  @media (min-width: 641px) and (max-width: 768px) {
    width: 343px;
  }
`;

const BlueButton = styled.button`
  width: 139px;
  height: 41px;
  border-radius: 8px;
  color: #fff;
  background-color: #1a56db;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:active {
    border: 1px solid #1a56db;
  }
`;

const Contact = () => {
  const { enqueueSnackbar } = useSnackbar();

  const { formik, isSubmitting } = useContactForm(enqueueSnackbar);

  return (
    <Container>
      <Content>
        <Heading>
          <Title1>{text1}</Title1>
          <TextSupporting1>{text2}</TextSupporting1>
        </Heading>
        <Form onSubmit={formik.handleSubmit}>
          <InputBox>
            <Label>Your email</Label>
            <Input
              type="email"
              placeholder="name@flowbite.com"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
          </InputBox>
          <InputBox>
            <Label>Subject</Label>
            <Input
              type="text"
              placeholder="Let as know we can help you"
              name="subject"
              onChange={formik.handleChange}
              value={formik.values.subject}
            />
            {formik.touched.subject && formik.errors.subject ? (
              <div>{formik.errors.subject}</div>
            ) : null}
          </InputBox>
          <InputBox>
            <Label>Your message</Label>
            <Textarea
              rows="6"
              cols="20"
              name="message"
              onChange={formik.handleChange}
              value={formik.values.message}
            />
            {formik.touched.message && formik.errors.message ? (
              <div>{formik.errors.message}</div>
            ) : null}
          </InputBox>
          <BlueButton type="submit" disabled={isSubmitting}>
            Send message
          </BlueButton>
        </Form>
      </Content>
    </Container>
  );
};
export default Contact;
