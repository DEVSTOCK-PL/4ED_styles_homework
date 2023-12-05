import { useState } from "react";

import styled from "styled-components";

import { useContext } from "react";
import { StyleContext } from "../App";


import { colors } from "./colors";

import { Container, Button } from "./styleElements";

import WebLogo from "./WebLogo";

import breakPoints from "./breakPoints";

const { tablet } = breakPoints;

import { Link, useLocation } from "react-router-dom";

const NavContainer = styled(Container)`
  display: none;
  @media (max-width: ${tablet}) {
    display: block;
  }
`;
const MenuBurger = styled.label`
  cursor: pointer;
  top: 0px;
  right: 3rem;
  position: absolute;
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


const Icon = styled.span`
  position: relative;
  bottom: 20px;
  /* background-color: ${(props) => (props.clicked ? "transparent" : "white")}; */
  background-color: ${(props) => (props.darkTheme ? "white" : "#1a56db")};
  width: 3rem;
  height: 3px;
  display: inline-block;
  margin-top: 3.5rem;
  transition: all 0.3s;
  &::before,
  &::after {
    content: "";
    background-color: #ffff;
    background-color: ${(props) => (props.darkTheme ? "white" : "#1a56db")};
    width: 3rem;
    height: 3px;
    display: inline-block;
    position: absolute;
    left: 0;
    transition: all 0.3s;
  }
  &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
  ${MenuBurger}:hover &::before {
    top: ${(props) => (props.clicked ? "0" : "-1rem")};
  }
  ${MenuBurger}:hover &::after {
    top: ${(props) => (props.clicked ? "0" : "1rem")};
  }
`;

const MenuButtons = styled.div`
  border: 1px solid #9ca3af;
  border-radius: 5px;
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 76px;
  right: 0px;
  height: calc(80vh - 76px);
  width: 50%;
  background-color: ${(props) => (props.darkTheme ? "#1f2a37" : colors.LightBackgroundColorTwo)};
  overflow: hidden;
  transition: all 0.5s ease 0s;
`;

const NavButtons = styled(Button)`
  padding: 15px;
  background-color: transparent;
  a {
    text-decoration: none;
    color: ${(props) => (props.darkTheme ? "#FFFF" : colors.LightFontColor)};
  }
  &.active {
    a {
      color: #1a56db;
      font-weight: 800;
    }
  }
`;

function TestBurger({ toggleTheme }) {
  const darkTheme = useContext(StyleContext);
  console.log("elo", darkTheme)

  const [click, setClick] = useState(false);
  const { pathname } = useLocation();

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <NavContainer>
      <WebLogo />
      <ThemeButton onClick={toggleTheme} darkTheme={darkTheme}>
        {darkTheme ? "Dark mode" : "White mode"}
      </ThemeButton>
      <MenuBurger htmlFor="navi-toggle" onClick={handleClick}>
        <Icon darkTheme={darkTheme} clicked={click}>
          &nbsp;
        </Icon>
      </MenuBurger>

      {click && (
        <MenuButtons darkTheme={darkTheme}>
          <NavButtons darkTheme={darkTheme} className={pathname === "/Home" ? "active" : ""}>
            <Link to="/Home">HOME</Link>
          </NavButtons>

          <NavButtons darkTheme={darkTheme} className={pathname === "/News" ? "active" : ""}>
            <Link to="/News">NEWS</Link>
          </NavButtons>

          <NavButtons darkTheme={darkTheme} className={pathname === "/Events" ? "active" : ""}>
            <Link to="/Events">EVENTS</Link>
          </NavButtons>

          <NavButtons darkTheme={darkTheme} className={pathname === "/Contact" ? "active" : ""}>
            <Link to="/Contact">CONTACT</Link>
          </NavButtons>

          <NavButtons darkTheme={darkTheme} className={pathname === "/List" ? "active" : ""}>
            <Link to="/List">List</Link>
          </NavButtons>

          <NavButtons darkTheme={darkTheme} className={pathname === "/FormikForm" ? "active" : ""}>
            <Link to="/FormikForm">Formik</Link>
          </NavButtons>

          <NavButtons darkTheme={darkTheme} className={pathname === "/NotFound" ? "active" : ""}>
            <Link to="/NotFound">Log in</Link>
          </NavButtons>

          <NavButtons darkTheme={darkTheme} className={pathname === "/NotFound" ? "active" : ""}>
            <Link to="/NotFound">Get started</Link>
          </NavButtons>
        </MenuButtons>
      )}
    </NavContainer>
  );
}

export default TestBurger;