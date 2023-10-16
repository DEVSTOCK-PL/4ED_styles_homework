import styled from 'styled-components';
import { Container } from '../Container';
import { Button } from '../Button';

const LoginContainer = styled(Container)`
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

export const Login = () => {
  return (
    <LoginContainer className="desktopButtons" columnGap="16px">
      <Button backgroundColor="transparent" fontSize="14px">
        Log in
      </Button>
      <Button padding="10px 20px" borderRadius="8px" fontSize="14px">
        Get started
      </Button>
    </LoginContainer>
  );
};
