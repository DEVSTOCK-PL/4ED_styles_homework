import useAPIQuery from "../hooks/useAPIQuery";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { logInValidationSchema } from "../validationSchemas";
import styled from "styled-components";
import { Button } from "../components/UI";
import useUserContext from "../hooks/useUserContext";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

const LogInWrapper = styled.section`
  background-color: ${({ theme }) => theme.background_1};
  width: 100%;
  display: flex;
  height: 100%;
  justify-content: center;
`;

const LogInContainer = styled.div`
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;

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
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: start;
`;

const Message = styled.div`
  background: ${({ theme }) => theme.background_1};
  color: ${({ theme }) => theme.text};
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 63px;
  padding: 96px 16px;
`;

const initialValues = {
  email: "",
  password: "",
};

const LogInPage = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { runQuery } = useAPIQuery();

  const { data } = runQuery.get("/users");

  const { isAuth, logIn } = useUserContext();
  const navigate = useNavigate();

  const checkCredentials = ({ email, password }) => {
    return data.find(({ email: dbEmail, password: dbPassword }) => email === dbEmail && password === dbPassword);
  };
  const handleSubmit = (values, { setErrors }) => {
    const credentials = checkCredentials(values);
    if (!credentials) {
      setErrors({ email: "Email or Password does not match", password: "Email or Password does not match" });
    }
    enqueueSnackbar("You have successfully logged in!", { variant: "success" });
    logIn(credentials);
    navigate("/profile");
  };

  if (isAuth) {
    return <Message>You are already logged in</Message>;
  }

  return (
    <LogInWrapper>
      <LogInContainer>
        <Heading>
          <h1>Zaloguj się</h1>
        </Heading>
        <Formik initialValues={initialValues} validationSchema={logInValidationSchema} onSubmit={handleSubmit}>
          <ContactForm>
            <Form>
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
                <Button type="submit">Log In</Button>
              </ButtonWrapper>
            </Form>
          </ContactForm>
        </Formik>
      </LogInContainer>
    </LogInWrapper>
  );
};

export default LogInPage;
