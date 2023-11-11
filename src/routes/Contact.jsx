import { Layout } from '../components/Layout';
import { Contact } from '../components/main/contact/Contact';
import { CustomerLogos } from '../components/main/customerLogos/CustomerLogos';

function Contacts() {
  return (
    <Layout>
      <Contact />
      <CustomerLogos />
    </Layout>
  );
}

export default Contacts;
