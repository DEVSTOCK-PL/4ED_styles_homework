import { Link, useLocation } from "react-router-dom";
import { Menu, Flowbite } from "../assets/svg_components";
import styled from "styled-components";

const NavbarContainer = styled.div`
  background-color: #111928;
  width: 100%;
  max-width: 1440px;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: end;

  @media (min-width: 1025px) and (max-width: 1280px) {
    max-width: 1280px;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    max-width: 1024px;
  }
  @media (min-width: 641px) and (max-width: 768px) {
    max-width: 768px;
  }
  @media (max-width: 640px) {
    max-width: 640px;
  }
`;

const NavbarContent = styled.div`
  display: flex;
  align-items: end;
  width: 89%;
  max-width: 1280px;
  height: 41px;
  justify-content: space-between;
`;

const Logo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 102px;
  height: 36px;
  font-family: Inter;
  font-size: 24px;
  font-weight: 600;
  line-height: 36px;
  letter-spacing: 0em;
  text-align: left;
  padding-bottom: 4px;
`;

const LogIn = styled.div`
  width: 180px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  gap: 16px;

  @media (max-width: 640px) {
    display: none;
  }
  @media (min-width: 641px) and (max-width: 768px) {
    display: none;
  }
`;

const MenuBox = styled.div`
  width: 41px;
  height: 41px;
  display: none;

  @media (min-width: 641px) and (max-width: 768px) {
    display: block;
    display: flex;
    justify-content: end;
  }
  @media (max-width: 640px) {
    display: block;
    display: flex;
    justify-content: end;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: end;
  justify-content: start;
  width: 57%;
  max-width: 876px;
  height: 24px;
  gap: 32px;
  padding-bottom: 8px;
  font-size: 18px;

  @media (min-width: 1025px) and (max-width: 1280px) {
    gap: 15px;
    font-size: 16px;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    gap: 8px;
    font-size: 12px;
    margin-left: 10px;
  }
  @media (min-width: 641px) and (max-width: 768px) {
    display: none;
  }
  @media (max-width: 640px) {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;

  &:hover {
    color: #1a56db;
  }
`;

const LinkItem = styled.div`
  padding: 4px;

  &.active {
    border: 1px solid #1a56db;
    border-radius: 5px;
  }
`;

const Button = styled.button`
  width: 117px;
  height: 41px;
  background: #1a56db;
  border-radius: 8px;
  color: #fff;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
`;

const MenuButton = styled.button`
  height: 41px;
  width: 41px;
  background-color: transparent;
  border: 1px solid #111928;
`;

function Navbar() {
  const { pathname } = useLocation();

  return (
    <NavbarContainer>
      <NavbarContent>
        <Logo>
          <Flowbite />
          Logo
        </Logo>
        <Links>
          <LinkItem className={pathname === "/home" && "active"}>
            <StyledLink to="/home">HOME</StyledLink>
          </LinkItem>
          <LinkItem className={pathname === "/news" && "active"}>
            <StyledLink to="/news">NEWS</StyledLink>
          </LinkItem>
          <LinkItem className={pathname === "/events" && "active"}>
            <StyledLink to="/events">EVENTS</StyledLink>
          </LinkItem>
          <LinkItem className={pathname === "/contact" && "active"}>
            <StyledLink to="/contact">CONTACT</StyledLink>
          </LinkItem>
          <LinkItem className={pathname === "/home" && "active"}>
            <StyledLink to="/home">RICK & MORTY</StyledLink>
          </LinkItem>
        </Links>
        <LogIn>
          Log In
          <Button>Get Started</Button>
        </LogIn>
        <MenuBox>
          <MenuButton>
            <Menu />
          </MenuButton>
        </MenuBox>
      </NavbarContent>
    </NavbarContainer>
  );
}
export default Navbar;
