// import Home2 from "./Home2";
// import News from "./News";
// import Events from "./Events";
// import Contact from "./Contact";
// import NotFound from "./NotFound";
// import Container from "./styleElements/Container";
// import Button from "./styleElements/Button";

// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import styled from "styled-components";
import {BrowserRouter, Routes, Route,Link} from "react-router-dom"
import {Home2, News, Events, Contact, NotFound} from "../components"
import {Container, Button} from "./styleElements"


import WebLogo from "./WebLogo";
import BreakPoints from "./BreakPoints";

const NavContainer = styled(Container)`
  display: flex;
  align-items: center;
  max-width: none;
  /* width: 100%; */
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
  &.active {
    color: red;
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
    <BrowserRouter>
        <NavContainer>
      <WebLogo />
      <Nav>
        <NavButtons>
          <Link to="/Home2">HOME</Link>
        </NavButtons>
        <NavButtons>
        <Link to="/News">NEWS</Link>
        </NavButtons>
        <NavButtons>
        <Link to="/Events">EVENTS</Link>
        </NavButtons>
        <NavButtons>
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

    <Routes>
      <Route path="/Home2" element={<Home2/>}></Route>
      <Route path="/News" element={<News/>}></Route>
      <Route path="/Events" element={<Events/>}></Route>
      <Route path="/Contact" element={<Contact/>}></Route>
      <Route path="*" element={<NotFound/>}></Route>
    </Routes>
    </BrowserRouter>

  );
}


export default Navbar;
  
