import { CustomerLogos } from '../components/main/customerLogos/CustomerLogos';
import { Contact } from '../components/main/contact/Contact';
import { Layout } from '../components/Layout';

function Contacts() {
  return (
    <Layout>
      <Contact />
      <CustomerLogos />
    </Layout>
  );
}

export default Contacts;
