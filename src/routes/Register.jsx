import { Layout } from '../components/Layout';
import { ContactContainer } from '../components/main/contact/ContactContainer';
import { Heading } from '../components/main/contact/Heading';
import { RegisterFormFormik } from '../components/register/RegisterFormFormik';

function Register() {
  return (
    <Layout>
      <ContactContainer>
        <Heading h2="Zarejestruj się" />
        <RegisterFormFormik />
      </ContactContainer>
    </Layout>
  );
}

export default Register;
