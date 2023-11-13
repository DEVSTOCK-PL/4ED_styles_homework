import styled from 'styled-components';

import { InputField } from './InputField';
import { Button } from '../../Button';
import { Textarea } from './Textarea';

const Container = styled.div`
  min-width: 350px;
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 640px) {
    width: 100%;
  }
`;
const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const SendMessageButton = styled(Button)`
  background-color: #1c64f2;
  padding: 10px 20px;
  border-radius: 8px;
  gap: 8px;
  align-self: start;
`;

export const ContactForm = () => {
  return (
    <Container>
      <Row>
        <InputField
          label="Your email"
          placeholder="name@flowbite.com"
          type="email"
        />
        <InputField
          label="Subject"
          placeholder="Let us know how we can help you"
          type="text"
        />
        <Textarea />
        <SendMessageButton>Send message</SendMessageButton>
      </Row>
    </Container>
  );
};
