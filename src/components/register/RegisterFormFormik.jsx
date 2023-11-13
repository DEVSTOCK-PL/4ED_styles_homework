import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import useRegisterUser from '../../hooks/useRegisterUser';

import { InputField } from '../main/contact/InputField';
import {
  Container,
  Row,
  Span,
  FormButton,
} from '../main/contact/ContactFormFormik';

export const RegisterFormFormik = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Pole "Name" jest wymagane.'),
    secondName: Yup.string().required('Pole "Second Name" jest wymagane.'),
    email: Yup.string()
      .email('Niepoprawny format adresu email.')
      .required('Pole "Email" jest wymagane.'),
    password: Yup.string()
      .min(8, 'Hasło musi mieć co najmniej 8 znaków')
      .matches(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
        'Hasło musi zawierać co najmniej jedną dużą literę, jedną małą literę, jedną cyfrę i jeden znak specjalny',
      )
      .required('Pole "Password" jest wymagane.'),
  });

  const handleSubmit = useRegisterUser(
    'users',
    'Konto zostalo utworzone.',
    'Nie udalo sie utworzyc konta.',
    '/login',
    'forRegister',
  );

  return (
    <Formik
      initialValues={{
        name: '',
        secondName: '',
        email: '',
        password: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Container>
        <Form>
          <Row>
            <InputField
              as={Field}
              htmlFor="name"
              label="Name"
              id="name"
              type="text"
              name="name"
              placeholder="Name"
            >
              <ErrorMessage name="name" component={Span} />
            </InputField>
            <InputField
              as={Field}
              htmlFor="secondName"
              label="Second Name"
              id="secondName"
              type="text"
              name="secondName"
              placeholder="Second Name"
            >
              <ErrorMessage name="secondName" component={Span} />
            </InputField>
            <InputField
              as={Field}
              htmlFor="email"
              label="Email"
              id="email"
              type="email"
              name="email"
              placeholder="name@flowbite.com"
            >
              <ErrorMessage name="email" component={Span} />
            </InputField>
            <InputField
              as={Field}
              htmlFor="password"
              label="Password"
              id="password"
              type="password"
              name="password"
            >
              <ErrorMessage name="password" component={Span} />
            </InputField>
            <FormButton type="submit">Create Account</FormButton>
          </Row>
        </Form>
      </Container>
    </Formik>
  );
};
