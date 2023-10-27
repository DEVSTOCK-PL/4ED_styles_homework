import React, { useState } from "react";
import styled from "styled-components";
import Button from "./styleElements/Button";
import Container from "./styleElements/Container";
import BreakPoints from "./BreakPoints";
import WebLogo from "./WebLogo";

const NavContainer = styled(Container)`
  display: none;
  @media (max-width: ${BreakPoints.tablet}) {
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
  display: flex;
  flex-direction: column;
`;

const BurgerButton = styled(Button)`
  margin-bottom: 5px;
`;

const menuOptions = [
  "Home",
  "News",
  "Events",
  "Contact",
  "Log in",
  "Get started",
];

function TestBurger() {
  const [click, setClick] = useState(false);
  const [menu, setMenu] = useState([]);

  const handleClick = () => {
    setClick(!click); // czy menu jest true

    const randomMenu = [];
    while (randomMenu.length < 5) {
      const randomIndex = Math.floor(Math.random() * menuOptions.length);
      if (!randomMenu.includes(menuOptions[randomIndex])) {
        randomMenu.push(menuOptions[randomIndex]);
      }
    }
    setMenu(randomMenu);
  };
  return (
    <NavContainer>
      <WebLogo />
      <MenuBurger htmlFor="navi-toggle" onClick={handleClick}>
        <Icon clicked={click}>&nbsp;</Icon>
      </MenuBurger>

      {click && (
        <MenuButtons>
          {menuOptions.map((item, index) => (
            <BurgerButton key={index}>{item}</BurgerButton>
          ))}
        </MenuButtons>
      )}
    </NavContainer>
  );
}

export default TestBurger;
