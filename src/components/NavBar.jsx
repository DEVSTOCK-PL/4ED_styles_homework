// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

import styled from "styled-components";

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
    color: #ffff;
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

function Navbar() {
  const { pathname } = useLocation();
  return (
    <NavContainer>
      <WebLogo />
      <Nav>
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
      </Nav>
      <ActionButton>
        <Button>
          <Link to="/NotFound">Log in</Link>
        </Button>
        <Button>
          <Link to="/NotFound">Get started</Link>
        </Button>
      </ActionButton>
    </NavContainer>
  );
}

export default Navbar;
