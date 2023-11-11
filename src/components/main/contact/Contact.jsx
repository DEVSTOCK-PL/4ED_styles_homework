import { ContactContainer } from './ContactContainer';
import { Heading } from './Heading';
import { ContactFormFormik } from './ContactFormFormik';

export const Contact = () => {
  return (
    <ContactContainer>
      <Heading
        h2="Contact us"
        p="Got a technical issue? Want to send feedback about a beta feature? Need
        details about our Business plan? Let us know."
      />
      <ContactFormFormik />
    </ContactContainer>
  );
};
