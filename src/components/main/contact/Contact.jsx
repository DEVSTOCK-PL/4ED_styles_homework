/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { Heading } from './Heading';
import { ContactForm } from './ContactForm';

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 96px 40px;
  background-color: #111928;
  border: solid #374151;
  border-width: 1px 0;
  gap: 64px;

  @media (max-width: 768px) {
    padding: 96px 20px;
  }
  @media (max-width: 640px) {
    padding: 32px 10px;
    /* gap: 24px; */
  }
`;

export const Contact = () => {
  return (
    <ContactContainer>
      <Heading />
      <ContactForm />
    </ContactContainer>
  );
};
