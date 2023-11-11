import styled from 'styled-components';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { ThemeContext } from '../../hooks/useThemeContext';

import { Container } from '../Container';
import { Button } from '../Button';
import DarkModeIcon from '../DarkModeIcon';
import LightModeIcon from '../LightModeIcon';

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

const ToggleButton = styled(Button)`
  background-color: transparent;
  font-size: 14px;
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
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
  // console.log(isDarkMode);
  const navigate = useNavigate();

  const handleClickLoginButton = () => {
    navigate('/login');
  };
  const handleClickGetStartedButton = () => {
    navigate('/register');
  };

  return (
    <LoginContainer className="desktopButtons">
      <ToggleButton onClick={() => setIsDarkMode((prev) => !prev)}>
        {isDarkMode ? <LightModeIcon /> : <DarkModeIcon fill="#000" />}
      </ToggleButton>
      <LoginButton className="loginButton" onClick={handleClickLoginButton}>
        Log in
      </LoginButton>
      <GetStartedButton onClick={handleClickGetStartedButton}>
        Get started
      </GetStartedButton>
    </LoginContainer>
  );
};
