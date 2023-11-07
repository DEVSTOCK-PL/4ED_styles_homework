import styled from "styled-components";
import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AppContext } from "../hooks/AppContext";
import useOpenMenuLogic from "../hooks/useOpenMenuLogic";
import { Menu, Flowbite, Sun, Moon } from "../assets/svg_components";

const NavbarContainer = styled.div`
  width: 1440px;
  max-width: 1440px;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: end;
  position: relative;

  @media (min-width: 1280px) and (max-width: 1440px) {
    max-width: 1440px;
  }
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
  position: relative;
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  gap: 10px;

  @media (max-width: 640px) {
    display: none;
  }
  @media (min-width: 641px) and (max-width: 768px) {
    display: none;
  }
`;

const MenuBox = styled.div`
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
    gap: 4px;
    font-size: 10px;
    margin-left: 6px;
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
const StyledLinkRegister = styled(StyledLink)`
  &:hover {
    color: #111;
    font-weight: 600;
  }
`;
const StyledLinkLogin = styled(StyledLink)`
  &:hover {
    color: #3fae14;
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

const ButtonLogIn = styled(Button)`
  width: 80px;
  background-color: transparent;

  &:active {
    border: 1px solid #fff;
  }
`;

const MenuButton = styled.button`
  height: 41px;
  width: 41px;
  background-color: transparent;
  border: none;
  margin-left: 10px;
`;

const MenuOpen = styled.div`
  background-color: #111928;
  width: auto;
  height: auto;
  border: 1px solid #fff;
  border-radius: 8px;
  position: absolute;
  top: 56px;
  right: 5px;
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: end;
  padding: 20px;
  z-index: 6;
`;

const ToggleButton = styled(ButtonLogIn)`
  width: 60px;
  border: none;
`;

const GreenLed = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: ${(props) => (props.login ? "green" : "red")};
`;
function Navbar() {
  const { pathname } = useLocation();
  const { open, handleOpen, closeMenu } = useOpenMenuLogic();
  const { isDarkTheme, toggleTheme, login, toggleLogin } =
    useContext(AppContext);
  const storedUser = localStorage.getItem("objectUsera");
  console.log("storedUser:", storedUser);

  console.log("login w Navbar", login);
  return (
    <NavbarContainer>
      <NavbarContent>
        <Logo>
          <Flowbite />
          Logo
        </Logo>
        <Links>
          <LinkItem className={pathname === "/home" && "active"}>
            <StyledLink to="/home" onClick={closeMenu}>
              HOME
            </StyledLink>
          </LinkItem>
          <LinkItem className={pathname === "/news" && "active"}>
            <StyledLink to="/news" onClick={closeMenu}>
              NEWS
            </StyledLink>
          </LinkItem>
          <LinkItem className={pathname === "/events" && "active"}>
            <StyledLink to="/events" onClick={closeMenu}>
              EVENTS
            </StyledLink>
          </LinkItem>
          <LinkItem className={pathname === "/contact" && "active"}>
            <StyledLink to="/contact" onClick={closeMenu}>
              CONTACT
            </StyledLink>
          </LinkItem>
          <LinkItem className={pathname === "/rickandmorty" && "active"}>
            <StyledLink to="/rickandmorty" onClick={closeMenu}>
              RICK & MORTY
            </StyledLink>
          </LinkItem>
          {login && (
            <LinkItem className={pathname === "/profile" && "active"}>
              <StyledLink to="/profile" onClick={closeMenu}>
                PROFILE
              </StyledLink>
            </LinkItem>
          )}
        </Links>
        <LogIn>
          <GreenLed login={login} />
          {login && <div>Jesteś zalogowany jako {storedUser.name}</div>}
          {login && (
            <ButtonLogIn
              onClick={() => {
                localStorage.removeItem("objectUsera");
                toggleLogin(false);
              }}>
              Wyloguj
            </ButtonLogIn>
          )}
          <ToggleButton onClick={toggleTheme}>
            {isDarkTheme ? <Sun /> : <Moon />}
          </ToggleButton>
          {!login && (
            <ButtonLogIn>
              <StyledLinkLogin to="/login">Log In</StyledLinkLogin>
            </ButtonLogIn>
          )}
          {!login && (
            <Button>
              <StyledLinkRegister to="/register">
                Get Started
              </StyledLinkRegister>
            </Button>
          )}
        </LogIn>
        <MenuBox>
          <ToggleButton onClick={toggleTheme}>
            {isDarkTheme ? <Sun /> : <Moon />}
          </ToggleButton>
          <MenuButton onClick={handleOpen}>
            <Menu />
          </MenuButton>
        </MenuBox>
        {open && (
          <MenuOpen>
            <StyledLink to="/home" onClick={closeMenu}>
              HOME
            </StyledLink>
            <StyledLink to="/news" onClick={closeMenu}>
              NEWS
            </StyledLink>
            <StyledLink to="/events" onClick={closeMenu}>
              EVENTS
            </StyledLink>
            <StyledLink to="/contact" onClick={closeMenu}>
              CONTACT
            </StyledLink>
            <StyledLink to="/rickandmorty" onClick={closeMenu}>
              RICK & MORTY
            </StyledLink>
            <StyledLink to="/profile" onClick={closeMenu}>
              PROFILE
            </StyledLink>
          </MenuOpen>
        )}
      </NavbarContent>
    </NavbarContainer>
  );
}
export default Navbar;
