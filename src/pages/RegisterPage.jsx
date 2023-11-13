import styled from "styled-components";
import { Button } from "../components/UI";
import useAPIQuery from "../hooks/useAPIQuery";
import { Formik, Field, Form, ErrorMessage } from "formik";

import { registrationValidationSchema } from "../validationSchemas";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

const LogInWrapper = styled.section`
  background-color: ${({ theme }) => theme.background_1};
  width: 100%;
  display: flex;
  justify-content: center;
`;

const LogInContainer = styled.div`
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
const Heading = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 672px;
  align-items: center;

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
    p {
      color: #ff0000;
      font-size: 14px;
      font-weight: 500;
      line-height: 150%;
    }

    input::placeholder {
      font-size: 16px;
      font-weight: 400;
      color: #9ca3af;
      line-height: 150%;
    }
    @media (max-width: 640px) {
      width: 100%;
    }
  }
  @media (max-width: 640px) {
    width: 100%;
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: start;
`;

const initialValues = {
  name: "",
  secondName: "",
  email: "",
  password: "",
};

const RegisterPage = () => {
  const { runQuery } = useAPIQuery();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const { data } = runQuery.get("/users");

  const checkEmail = (email) => {
    return data.some(({ email: dbEmail }) => dbEmail === email);
  };
  const handleSubmit = (values, { resetForm, setFieldError }) => {
    if (checkEmail(values.email)) {
      setFieldError("email", "Someone is already using this email");
      return;
    }
    runQuery.post(
      "/users",
      { ...values, role: "User" },
      {
        onSuccess: () => {
          enqueueSnackbar("You have successfully registered!", { variant: "success" });
          resetForm(true);
          navigate("/login");
        },
        onError: () => {
          enqueueSnackbar("There war an error, try again!", { variant: "error" });
        },
      }
    );
  };

  return (
    <LogInWrapper>
      <LogInContainer>
        <Heading>
          <h1>Zarejestruj się</h1>
        </Heading>
        <Formik initialValues={initialValues} validationSchema={registrationValidationSchema} onSubmit={handleSubmit}>
          <ContactForm>
            <Form>
              <div>
                <label>Name</label>
                <Field name="name" type="text" placeholder="Name" />
                <ErrorMessage component="p" name="name" />
              </div>
              <div>
                <label>Second Name</label>
                <Field type="text" name="secondName" placeholder="Second Name" />
                <ErrorMessage component="p" name="secondName" />
              </div>
              <div>
                <label>Your email</label>
                <Field type="email" name="email" placeholder="name@flowbite.com" />
                <ErrorMessage component="p" name="email" />
              </div>
              <div>
                <label>Password</label>
                <Field type="password" name="password" placeholder="Enter the password " />
                <ErrorMessage component="p" name="password" />
              </div>

              <ButtonWrapper>
                <Button type="submit">Send message</Button>
              </ButtonWrapper>
            </Form>
          </ContactForm>
        </Formik>
      </LogInContainer>
    </LogInWrapper>
  );
};

export default RegisterPage;
