import styled from "styled-components";
// eslint-disable-next-line no-unused-vars
import { useContext } from "react";
import { StyleContext } from "../App";

import { GlobalStyle } from "../App";

import { Link, useLocation } from "react-router-dom";

import { breakPoints } from "../components";

import { Container, Button } from "./styleElements";

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
`;

const NavButtons = styled.div`
  display: flex;
  margin-right: 20px;
  a {
    /* color: #ffff; */
    /* color: ${(props) => (props.darkTheme ? "white" : "black")}; */
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

const ActionButton = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;

  a {
    text-decoration: none;
    color: #ffffff;
  }
`;

const ThemeButton = styled.button`
  font-size: 16px;
  padding: 10px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  background-color: ${(props) => (props.darkTheme ? "white" : "#1a56db")};
  color: ${(props) => (props.darkTheme ? "black" : "white")};
`;


function Navbar({ toggleTheme }) {
  const { pathname } = useLocation();

  const darkTheme = useContext(StyleContext);
  console.log(darkTheme)
  return (
    <NavContainer>
      <GlobalStyle theme={darkTheme} />
      <WebLogo />
      <Nav>
        <ThemeButton onClick={toggleTheme} darkTheme={darkTheme}>
          {darkTheme ? "Dark mode" : "White mode"}
        </ThemeButton>
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
        <NavButtons className={pathname === "/FormikForm" ? "active" : ""}>
          <Link to="/FormikForm">FORMIK</Link>
        </NavButtons>
      </Nav>
      <ActionButton>
        <Button>
          <Link to="/NotFound">Log in</Link>
        </Button>
        <Button>
          <Link to="/GetStarted">Get started</Link>
        </Button>
      </ActionButton>
    </NavContainer>
  );
}

export default Navbar;
