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

export const LoginFormFormik = () => {
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Niepoprawny format adresu email.')
      .required('Pole "Email" jest wymagane.'),
    password: Yup.string().required('Pole "Password" jest wymagane.'),
  });

  const handleSubmit = useRegisterUser('users', '', '', null, 'forLogin');

  return (
    <Formik
      initialValues={{
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
              htmlFor="email"
              label="Your email"
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
              placeholder="Password"
            >
              <ErrorMessage name="password" component={Span} />
            </InputField>
            <FormButton type="submit">Login</FormButton>
          </Row>
        </Form>
      </Container>
    </Formik>
  );
};
