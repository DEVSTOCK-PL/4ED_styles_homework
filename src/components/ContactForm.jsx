import styled from "styled-components";

const Form = styled.div`
  width: 100%;
  max-width: 640px;
  height: 478px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #111928;
  justify-content: space-between;

  @media (min-width: 641px) and (max-width: 768px) {
    width: 343px;
    padding-bottom: 30px;
    padding-top: 10px;
  }
  @media (max-width: 640px) {
    width: 343px;
    padding-bottom: 30px;
    padding-top: 10px;
  }
`;

const InputBox = styled.div`
  width: 99%;
  height: auto;

  @media (min-width: 641px) and (max-width: 768px) {
    width: 343px;
  }
  @media (max-width: 640px) {
    width: 343px;
  }
`;

const Label = styled.div`
  width: 100%;
  height: 21px;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  text-align: left;
  margin-bottom: 8px;

  @media (min-width: 641px) and (max-width: 768px) {
    width: 343px;
  }
  @media (max-width: 640px) {
    width: 343px;
  }
`;

const Input = styled.input`
  height: 52px;
  width: 100%;
  background-color: #374151;
  border: 1px solid #4b5563;
  border-radius: 8px;
  font-size: 16px;
  line-height: 24px;
  color: #9ca3af;
  padding-left: 10px;
  padding-top: 4px;
  box-sizing: border-box;

  ::placeholder {
    font-size: 16px;
    line-height: 24px;
    color: #9ca3af;
  }

  @media (min-width: 641px) and (max-width: 768px) {
    width: 343px;
  }
  @media (max-width: 640px) {
    width: 343px;
  }
`;
const Textarea = styled.textarea`
  height: 162px;
  width: 100%;
  background-color: #374151;
  border: 1px solid #4b5563;
  border-radius: 8px;
  font-size: 16px;
  line-height: 24px;
  color: #9ca3af;
  padding-left: 10px;
  padding-top: 4px;
  box-sizing: border-box;

  @media (max-width: 640px) {
    width: 343px;
  }
  @media (min-width: 641px) and (max-width: 768px) {
    width: 343px;
  }
`;

const BlueButton = styled.button`
  width: 139px;
  height: 41px;
  border-radius: 8px;
  color: #fff;
  background-color: ${(props) => (props.isDisabled ? "red" : "#1A56DB")};
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:active {
    border: ${(props) =>
      props.isDisabled ? "1px solid red" : "1px solid #1a56db"};
  }
`;

const ContactForm = () => {
  return (
    <Form>
      <InputBox>
        <Label>Your email</Label>
        <Input type="text" placeholder="name@flowbite.com"></Input>
      </InputBox>
      <InputBox>
        <Label>Subject</Label>
        <Input type="text" placeholder="Let as know we can help you"></Input>
      </InputBox>
      <InputBox>
        <Label>Your message</Label>
        <Textarea rows="6" cols="20"></Textarea>
      </InputBox>
      <BlueButton>Send message</BlueButton>
    </Form>
  );
};
export default ContactForm;
