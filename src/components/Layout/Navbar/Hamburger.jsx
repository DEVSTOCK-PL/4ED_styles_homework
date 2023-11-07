import { useState } from "react";
import styled from "styled-components";
import NavLinksComponent from "./NavLinks";
import CTAButtonComponent from "./CTAButton";
import ThemeButton from "../../Reusable/ThemeButton";

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 25px;
  right: 20px;
  z-index: 20;
  display: none;

  @media (max-width: 1000px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: #ffffff;
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const MenuItems = styled.div`
  display: none;
  margin-right: 15px;
  padding: 20px 0 10px 10px;
  /* text-align: left; */

  &.open {
    display: block;
    position: absolute;
    top: 60px;
    right: 0;
    width: 120px;
    background-color: #374151;
    box-shadow: 0px 8px 16px 0px rgba(124, 124, 124, 0.2);
    z-index: 1;

    & > *:not(:last-child) {
      border-bottom: 1px solid #9ca3af;
      padding-bottom: 10px;
      margin-bottom: 10px;
      margin-left: -5px;
      width: 100%;
    }
  }
`;

function HamburgerMenu({ links, ctaProps }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <MenuItems className={open ? "open" : ""}>
        <NavLinksComponent links={links} />
        <ThemeButton text="Theme" />
        <CTAButtonComponent {...ctaProps} />
      </MenuItems>
    </>
  );
}

export default HamburgerMenu;
