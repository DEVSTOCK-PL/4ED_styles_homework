import { Layout } from '../components/Layout';
import { ContactContainer } from '../components/main/contact/ContactContainer';
import { Heading } from '../components/main/contact/Heading';
import { LoginFormFormik } from '../components/login/LoginFormFormik';

function Login() {
  return (
    <Layout>
      <ContactContainer>
        <Heading h2="Zaloguj się" />
        <LoginFormFormik />
      </ContactContainer>
    </Layout>
  );
}

export default Login;
