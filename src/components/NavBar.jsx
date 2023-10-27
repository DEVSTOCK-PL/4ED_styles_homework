// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import styled from "styled-components";
import Container from "./styleElements/Container";
import Button from "./styleElements/Button";
import WebLogo from "./WebLogo";
import BreakPoints from "./BreakPoints";

const NavContainer = styled(Container)`
  display: flex;
  align-items: center;
  max-width: none;
  @media (max-width: ${BreakPoints.tablet}) {
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
  return (
    <NavContainer>
      <WebLogo />
      <Nav>
        <NavButtons>
          <a href="/login">HOME</a>
        </NavButtons>
        <NavButtons>
          <a href="/login">NEWS</a>
        </NavButtons>
        <NavButtons>
          <a href="/login">EVENTS</a>
        </NavButtons>
        <NavButtons>
          <a href="/login">CONTACT</a>
        </NavButtons>
      </Nav>
      <ActionButton>
        <Button>
          <a href="/login">Log in</a>
        </Button>
        <Button>
          <a href="/get-started">Get started</a>
        </Button>
      </ActionButton>
    </NavContainer>
  );
}

export default Navbar;
