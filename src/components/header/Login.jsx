import styled from 'styled-components';
import { Container } from '../Container';
import { Button } from '../Button';

const LoginContainer = styled(Container)`
  column-gap: 16px;

  @media (max-width: 768px) {
    button {
      font-size: 12px;
    }
  }
  @media (max-width: 640px) {
    &.desktopButtons {
      display: none;
    }
  }
`;

const LoginButton = styled(Button)`
  background-color: transparent;
  font-size: 14px;
`;

const GetStartedButton = styled(Button)`
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 14px;
`;

export const Login = () => {
  return (
    <LoginContainer className="desktopButtons">
      <LoginButton>Log in</LoginButton>
      <GetStartedButton>Get started</GetStartedButton>
    </LoginContainer>
  );
};
