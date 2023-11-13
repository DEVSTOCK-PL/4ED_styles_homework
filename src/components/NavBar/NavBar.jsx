import { useState } from "react";
import { NavLink } from "react-router-dom";

import styled from "styled-components";

import { Button } from "../UI/index.js";
import { Logo, Settings } from "../../assets/index.js";
import Toggle from "../UI/Toggle.jsx";
import useUserContext from "../../hooks/useUserContext.jsx";
import useThemeContext from "../../hooks/useThemeContext.jsx";

const NavBarWrapper = styled.nav`
  background-color: ${({ theme }) => theme.background_1};
  width: 100%;
  display: flex;
  justify-content: center;
`;

const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ $isAuth }) => ($isAuth ? "20px" : "64px")};
  color: ${({ theme }) => theme.text};
  padding: 24px 16px 0 16px;
  width: 100%;
  max-width: 1280px;
  height: auto;
  z-index: 100;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 102px;
  gap: 12px;
  font-size: 24px;
  font-weight: 600;
`;
const NavLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: 900px) {
    display: ${({ $isopen }) => ($isopen ? "flex" : "none")};
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 60px;
    padding: 20px 0;
    position: absolute;
    top: 75px;
    height: 100%;
    left: 0;
    background-color: ${({ theme }) => theme.background_1};
    opacity: 95%;
  }
`;

const NavLinksLeft = styled.div`
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ $isAuth }) => ($isAuth ? "16px" : "32px")};
  font-weight: 600;
  line-height: 150%;

  a {
    white-space: nowrap;
    color: inherit;
    text-decoration: none;
    text-transform: uppercase;

    &.active {
      color: #1a56db;
    }
  }

  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    gap: 16px;
  }
`;
const NavLinksRight = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
  gap: 16px;
  font-size: 14px;
  font-weight: 500;
  @media (max-width: 900px) {
    justify-content: center;
    flex-direction: column;
  }
`;

const Credentials = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  font-weight: 700;
  span {
    color: #1a56db;
  }
`;

const Hamburger = styled.div`
  display: none;
  font-size: 40px;
  cursor: pointer;
  @media (max-width: 900px) {
    display: block;
  }
`;

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { userData, isAuth, logOut } = useUserContext();
  const { currentTheme } = useThemeContext();
  const onClickHandle = (e) => {
    if (e.target.tagName === "A") {
      setIsOpen(false);
    }
  };

  const svgFill = {
    dark: "#fff",
    light: "#1F2A37",
  };
  const fill = svgFill[currentTheme];

  return (
    <NavBarWrapper>
      <NavBarContainer $isAuth={isAuth}>
        <LogoWrapper>
          <Logo />
          Logo
        </LogoWrapper>
        <Hamburger onClick={() => setIsOpen((isOpen) => !isOpen)}>☰</Hamburger>
        <NavLinks $isopen={isOpen} onClick={onClickHandle}>
          <NavLinksLeft $isAuth={isAuth}>
            <NavLink to="/">home</NavLink>
            <NavLink to="news">news</NavLink>
            <NavLink to="events">events</NavLink>
            <NavLink to="contact">contact</NavLink>
            <NavLink to="rickandmorty">the rick and morty</NavLink>
            {isAuth && <NavLink to="profile">Profile</NavLink>}
          </NavLinksLeft>
          <NavLinksRight>
            {isAuth && (
              <Credentials>
                <p>
                  Name: <span>{userData?.name}</span>
                </p>
                <p>
                  Role: <span>{userData?.role}</span>
                </p>
                <NavLink to="admin">{({ isActive }) => <Settings fill={isActive ? "red" : fill} />}</NavLink>
              </Credentials>
            )}
            <Toggle />
            {!isAuth ? (
              <NavLink to="login">Log In </NavLink>
            ) : (
              <NavLink onClick={logOut} to="login">
                Log Out
              </NavLink>
            )}
            {!isAuth && (
              <Button>
                <NavLink to="register">Get started</NavLink>
              </Button>
            )}
          </NavLinksRight>
        </NavLinks>
      </NavBarContainer>
    </NavBarWrapper>
  );
}

export default NavBar;
