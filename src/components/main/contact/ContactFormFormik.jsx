import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

import useRegisterUser from '../../../hooks/useRegisterUser';

import { InputField } from './InputField';
import { Textarea } from './Textarea';
import { Button } from '../../Button';

export const Container = styled.div`
  min-width: 350px;
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 640px) {
    width: 100%;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const Span = styled.span`
  color: #f00;
  font-size: 14px;
`;

export const StyledTextarea = styled.textarea`
  padding: 14px 16px;
  border: 1px solid #4b5563;
  border-radius: 8px;
  background-color: #374151;
  color: #9ca3af;
  font-size: 16px;
  font-weight: 400;
  height: 190px;
`;

export const FormButton = styled(Button)`
  background-color: #1c64f2;
  padding: 10px 20px;
  border-radius: 8px;
  gap: 8px;
  align-self: start;
`;

export const ContactFormFormik = () => {
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Niepoprawny format adresu email.')
      .required('Pole "Email" jest wymagane.'),
    subject: Yup.string().required('Pole "Subject" jest wymagane.'),
    description: Yup.string().required('Pole "Your message" jest wymagane.'),
  });

  const handleSubmit = useRegisterUser(
    'contact',
    'Wiadomosc zostala wyslana.',
    'Wystapil blad. Nie udalo sie wyslac wiadomosci.',
  );

  return (
    <Formik
      initialValues={{ email: '', subject: '', description: '' }}
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
              htmlFor="subject"
              label="Subject"
              id="subject"
              type="text"
              name="subject"
              placeholder="Let us know how we can help you"
            >
              <ErrorMessage name="subject" component={Span} />
            </InputField>
            <Textarea>
              Your message
              <Field
                as={StyledTextarea}
                type="text"
                id="description"
                name="description"
              />
              <ErrorMessage name="description" component={Span} />
            </Textarea>
            <FormButton type="submit">Send message</FormButton>
          </Row>
        </Form>
      </Container>
    </Formik>
  );
};
