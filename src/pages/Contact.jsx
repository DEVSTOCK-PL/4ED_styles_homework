import { Layout, Contact, CustomerLogosComponent } from "../components/index";

function ContactPage({ customerLogos }) {
  return (
    <Layout>
      <Contact />
      <CustomerLogosComponent customerLogos={customerLogos} />
    </Layout>
  );
}

export default ContactPage;
