import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';

import { ThemeContext } from '../../hooks/useThemeContext';
import { LoginUserContext } from '../../hooks/useLoginUserContext';

import { Container } from '../Container';
import { Button } from '../Button';
import DarkModeIcon from '../DarkModeIcon';
import LightModeIcon from '../LightModeIcon';

import vector from '../../assets/vector.svg';

const data = [
  { id: crypto.randomUUID(), to: '/', text: 'HOME' },
  { id: crypto.randomUUID(), to: '/news', text: 'NEWS' },
  { id: crypto.randomUUID(), to: '/events', text: 'EVENTS' },
  { id: crypto.randomUUID(), to: '/contact', text: 'CONTACT' },
  { id: crypto.randomUUID(), to: '/list', text: 'RICKANDMORTY' },
  // { id: crypto.randomUUID(), to: '/profile', text: 'PROFILE' },
];

const NavContainer = styled(Container)`
  margin-left: 100px;

  &.mobileNav {
    display: none;
  }

  .link {
    text-decoration: none;

    &:active {
    }
  }

  .active {
    color: #00f;
  }

  @media (max-width: 1536px) {
    margin-left: 50px;
    .ul {
      column-gap: 30px;
    }
  }
  @media (max-width: 1280px) {
    margin-left: 30px;
    .ul {
      column-gap: 20px;
    }
  }
  @media (max-width: 1024px) {
    margin-left: 25px;
    .ul {
      column-gap: 15px;
    }
  }
  @media (max-width: 768px) {
    margin-left: 20px;
    .ul {
      column-gap: 10px;
    }
    .link {
      font-size: 14px;
    }
  }
  @media (max-width: 640px) {
    &.desktopNav {
      display: none;
    }
    &.mobileNav {
      display: flex;
    }
  }
`;

const UlContainer = styled(Container)`
  column-gap: 50px;
`;

const ToggleButton = styled(Button)`
  background-color: transparent;
`;

const StyledImg = styled.img`
  width: 23px;
  height: 20px;
  margin-left: 20px;
`;

export const Nav = () => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
  const { user } = useContext(LoginUserContext);

  return (
    <>
      <NavContainer as="nav" className="desktopNav">
        <UlContainer as="ul" className="ul">
          {data.map(({ id, to, text }) => (
            <Container key={id} as="li">
              <NavLink className="link" to={to}>
                {text}
              </NavLink>
            </Container>
          ))}
          {user.isLogin && (
            <Container as="li">
              <NavLink className="link" to="/profile">
                PROFILE
              </NavLink>
            </Container>
          )}
        </UlContainer>
      </NavContainer>
      <NavContainer className="mobileNav">
        <ToggleButton
          onClick={() => {
            setIsDarkMode((prev) => !prev);
          }}
        >
          {isDarkMode ? <LightModeIcon /> : <DarkModeIcon fill="#000" />}
        </ToggleButton>
        <StyledImg src={vector} alt="logo_menu" />
      </NavContainer>
    </>
  );
};
