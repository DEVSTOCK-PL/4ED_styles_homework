import { useState } from "react";

import styled from "styled-components";

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

const Icon = styled.span`
  position: relative;
  bottom: 20px;
  background-color: ${(props) => (props.clicked ? "transparent" : "white")};
  width: 3rem;
  height: 3px;
  display: inline-block;
  margin-top: 3.5rem;
  transition: all 0.3s;
  &::before,
  &::after {
    content: "";
    background-color: #ffff;
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
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 76px;
  left: 0px;
  height: calc(80vh - 76px);
  width: 100%;
  background-color: #1f2a37;
  overflow: hidden;
  transition: all 0.5s ease 0s;
`;

const NavButtons = styled(Button)`
  padding: 15px;
  background-color: transparent;
  a {
    text-decoration: none;
    color: #ffff;
  }
  &.active {
    a {
      color: #1a56db;
      font-weight: 800;
    }
  }
`;

function TestBurger() {
  const [click, setClick] = useState(false);
  const { pathname } = useLocation();

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <NavContainer>
      <WebLogo />
      <MenuBurger htmlFor="navi-toggle" onClick={handleClick}>
        <Icon clicked={click}>&nbsp;</Icon>
      </MenuBurger>

      {click && (
        <MenuButtons>
          <NavButtons className={pathname === "/Home" && "active"}>
            <Link to="/Home">HOME</Link>
          </NavButtons>

          <NavButtons className={pathname === "/News" && "active"}>
            <Link to="/News">NEWS</Link>
          </NavButtons>

          <NavButtons className={pathname === "/Events" && "active"}>
            <Link to="/Events">EVENTS</Link>
          </NavButtons>

          <NavButtons className={pathname === "/Contact" && "active"}>
            <Link to="/Contact">CONTACT</Link>
          </NavButtons>

          <NavButtons className={pathname === "/NotFound" && "active"}>
            <Link to="/NotFound">Log in</Link>
          </NavButtons>

          <NavButtons className={pathname === "/NotFound" && "active"}>
            <Link to="/NotFound">Get started</Link>
          </NavButtons>
        </MenuButtons>
      )}
    </NavContainer>
  );
}

export default TestBurger;
