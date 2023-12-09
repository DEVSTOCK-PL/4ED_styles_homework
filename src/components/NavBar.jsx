import styled from "styled-components";
// eslint-disable-next-line no-unused-vars
import { useContext } from "react";
import { StyleContext } from "../App";

import { GlobalStyle } from "../App";

import { Link, useLocation } from "react-router-dom";

import { breakPoints, ActionButtons } from "../components";

import { Container } from "./styleElements";

import { ThemeSwitcher } from "../components";

import WebLogo from "./WebLogo";

const NavContainer = styled(Container)`
  display: flex;
  align-items: center;
  max-width: none;
  @media (max-width: ${breakPoints.tablet}) {
    display: none;
  }
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
`;

const NavButtons = styled.div`
  display: flex;
  margin-right: 20px;
  a {
    font-size: 16px;
    font-weight: 500;
    text-decoration: none;
  }
  &.active {
    a {
      color: #1a56db;
    }
  }
`;

function Navbar({ toggleTheme }) {
  const { pathname } = useLocation();

  const darkTheme = useContext(StyleContext);
  console.log(darkTheme);

  return (
    <NavContainer>
      <GlobalStyle theme={darkTheme} />
      <WebLogo />
      <Nav>
        <NavButtons className={pathname === "/Home" ? "active" : ""}>
          <Link to="/Home">HOME</Link>
        </NavButtons>
        <NavButtons className={pathname === "/News" ? "active" : ""}>
          <Link to="/News">NEWS</Link>
        </NavButtons>
        <NavButtons className={pathname === "/Events" ? "active" : ""}>
          <Link to="/Events">EVENTS</Link>
        </NavButtons>
        <NavButtons className={pathname === "/Contact" ? "active" : ""}>
          <Link to="/Contact">CONTACT</Link>
        </NavButtons>
        <NavButtons className={pathname === "/List" ? "active" : ""}>
          <Link to="/List">LIST</Link>
        </NavButtons>
      </Nav>
      <ThemeSwitcher darkTheme={darkTheme} toggleTheme={toggleTheme} />
      <ActionButtons />
    </NavContainer>
  );
}

export default Navbar;
