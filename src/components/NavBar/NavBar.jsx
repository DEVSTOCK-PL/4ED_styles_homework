import React, {useState} from 'react';
import logo from './assets/logo.svg'
import styled from "styled-components";
import {Button} from "../UI/index.js";


const NavBarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 64px;
  color: white;
  padding: 24px 16px 0 16px;
  width: 100%;
  max-width: 1280px;
  height: 41px;


  @media (max-width: 900px) {
    width: 100%;
  }
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  width: 102px;
  gap: 12px;
  font-size: 24px;
  font-weight: 600;


`
const NavLinks = styled.ul`
  font-size: 16px;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 32px;
  font-weight: 500;
  list-style-type: none;
  width: 100%;


  @media (max-width: 900px) {
    display: ${({isOpen}) => isOpen ? 'flex' : 'none'};
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 20px 0;
    position: absolute;
    top: 65px;
    left: 0;

    background-color: #1F2A37;
    opacity: 95%;
  }

`
const Hamburger = styled.div`
  display: none;
  //padding: 10px;
  font-size: 40px;
  cursor: pointer;
  @media (max-width: 900px) {
    display: block;
  }

`

const CTA = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
  gap: 20px;

  //@media (max-width: 768px) {
  //  display: none;
  //}

`

function NavBar() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <NavBarContainer>
      <Logo><img src={logo} alt='Logo'/>Logo</Logo>
      <Hamburger onClick={() => setIsOpen(isOpen => !isOpen)}>☰</Hamburger>
      <NavLinks isOpen={isOpen}>

        <li>Company</li>
        <li>Marketplace</li>
        <li>Features</li>
        <li>Team</li>
        <li>Contact</li>
        <li><CTA><span>Log In </span><Button>Get started</Button> </CTA></li>

      </NavLinks>

    </NavBarContainer>
  );
}

export default NavBar;

