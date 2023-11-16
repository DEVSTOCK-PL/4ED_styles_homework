import Button from "../Reusable/Button";
import useRegisterForm from "../hooks/useRegisterForm";
import styled from "styled-components";

const RegisterContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const RegisterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 64px;
`;

const Heading = styled.h1`
  width: 100%;
  max-width: 672px;
  color: ${({ theme }) => theme.title};
  text-align: center;
  font-family: Inter;
  font-size: 36px;
  font-style: normal;
  font-weight: 800;
  line-height: 125%; /* 45px */
  letter-spacing: -0.36px;
  margin: 0;
  @media (min-width: 750px) {
    min-width: 672px;
  }
`;

const Form = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  min-width: 200px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  align-self: stretch;
  width: 100%;
`;

const InputField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  width: 100%;
`;

const Label = styled.label`
  align-self: stretch;
  color: ${({ theme }) => theme.title};
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  width: 100%;
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
  width: 100%;
  min-width: 200px;

  &::placeholder {
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.text};
    line-height: 150%;
  }
`;

const ErrorMessage = styled.div`
  color: red;
`;

function Register() {
  const { formik } = useRegisterForm();

  return (
    <RegisterContainer>
      <RegisterWrapper>
        <Heading>Zarejestruj się</Heading>
        <Form onSubmit={formik.handleSubmit}>
          <Row>
            <InputField>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="name"
                {...formik.getFieldProps("name")}
              />
              {formik.touched.name && formik.errors.name ? (
                <ErrorMessage>{formik.errors.name}</ErrorMessage>
              ) : null}
            </InputField>
            <InputField>
              <Label htmlFor="secondName">Second Name</Label>
              <Input
                id="secondName"
                name="secondName"
                type="text"
                placeholder="Second Name"
                {...formik.getFieldProps("secondName")}
              />
              {formik.touched.secondName && formik.errors.secondName ? (
                <ErrorMessage>{formik.errors.secondName}</ErrorMessage>
              ) : null}
            </InputField>
            <InputField>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="name@flowbite.com"
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email ? (
                <ErrorMessage>{formik.errors.email}</ErrorMessage>
              ) : null}
            </InputField>
            <InputField>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                {...formik.getFieldProps("password")}
              />
              {formik.touched.password && formik.errors.password ? (
                <ErrorMessage>{formik.errors.password}</ErrorMessage>
              ) : null}
            </InputField>
          </Row>
          <Button type="submit" version="primary">
            Zarejestruj się
          </Button>
        </Form>
      </RegisterWrapper>
    </RegisterContainer>
  );
}

export default Register;
