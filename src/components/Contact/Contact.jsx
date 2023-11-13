import styled from "styled-components";
import { Button } from "../UI/index.js";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { contactValidationSchema } from "../../validationSchemas";
import useAPIQuery from "../../hooks/useAPIQuery.jsx";
import { useSnackbar } from "notistack";

const ContactWrapper = styled.section`
  background-color: ${({ theme }) => theme.background_1};
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ContactContainer = styled.section`
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  padding: 96px 16px;
  align-items: center;
  gap: 64px;
  @media (max-width: 640px) {
    padding: 32px 16px;
  }
`;
const Heading = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 672px;
  align-items: center;
  gap: 16px;
  h1 {
    font-size: 36px;
    font-weight: 800;
    line-height: 125%;
    color: ${({ theme }) => theme.text};
    text-align: center;
    @media (max-width: 640px) {
      font-size: 30px;
    }
  }

  p {
    color: #9ca3af;
    font-size: 20px;
    font-weight: 400;
    line-height: 150%;
    text-align: center;
    @media (max-width: 640px) {
      font-size: 16px;
    }
  }

  @media (max-width: 640px) {
    width: 100%;
  }
`;
const ContactForm = styled.div`
  form {
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 640px;

    div {
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 8px;
    }

    label {
      color: ${({ theme }) => theme.text};
      font-size: 14px;
      font-weight: 500;
      line-height: 150%;
    }

    p {
      color: #ff0000;
      font-size: 14px;
      font-weight: 500;
      line-height: 150%;
    }

    input {
      background-color: ${({ theme }) => theme.background_4};
      border: 1px solid ${({ theme }) => theme.borderColor_2};
      border-radius: 8px;
      padding: 14px 16px;
      font-size: 16px;
      font-weight: 400;
      color: #9ca3af;
      line-height: 150%;
      width: 100%;
    }

    input::placeholder {
      font-size: 16px;
      font-weight: 400;
      color: #9ca3af;
      line-height: 150%;
    }

    textarea {
      border-radius: 8px;
      background-color: ${({ theme }) => theme.background_4};
      border: 1px solid ${({ theme }) => theme.borderColor_2};
      padding: 13px 20px;
      font-size: 16px;
      font-weight: 400;
      color: #9ca3af;
      line-height: 150%;
      height: 195px;
      resize: none;
      width: 100%;
    }

    @media (max-width: 640px) {
      width: 100%;
    }
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: start;
`;

const initialValues = {
  email: "",
  subject: "",
  message: "",
};

const Contact = () => {
  const { runQuery } = useAPIQuery();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = (values, { resetForm }) => {
    runQuery.post("/contact", values, {
      onSuccess: () => {
        enqueueSnackbar("Message sent, thank you.", { variant: "success" });
        resetForm(true);
      },
      onError: () => {
        enqueueSnackbar("There war an error, try again!", { variant: "error" });
      },
    });
  };
  return (
    <ContactWrapper>
      <ContactContainer>
        <Heading>
          <h1>Contact us</h1>
          <p>
            Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.
          </p>
        </Heading>
        <Formik initialValues={initialValues} validationSchema={contactValidationSchema} onSubmit={handleSubmit}>
          <ContactForm>
            <Form>
              <div>
                <label>Your email</label>
                <Field type="email" name="email" placeholder="name@flowbite.com" />
                <ErrorMessage component="p" name="email" />
              </div>
              <div>
                <label>Subject</label>
                <Field type="text" name="subject" placeholder="Let us know how we can help you" />
                <ErrorMessage component="p" name="subject" />
              </div>
              <div>
                <label>Your message</label>
                <Field as="textarea" name="message" />
                <ErrorMessage component="p" name="message" />
              </div>
              <ButtonWrapper>
                <Button type="submit">Send message</Button>
              </ButtonWrapper>
            </Form>
          </ContactForm>
        </Formik>
      </ContactContainer>
    </ContactWrapper>
  );
};

export default Contact;
