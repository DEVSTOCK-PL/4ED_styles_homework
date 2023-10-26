// eslint-disable-next-line no-unused-vars
import styled from "styled-components";
import Container from "./styleElements/Container";
import logo from "../images/logo.png";
import Button from "./styleElements/Button";

const breakpoints = {
  mobile: '320px',
  tablet: '768px',
  smallDesktop: '1024px',
  desktop: '1280px',
}

// @media (min-width: ${breakpoints.tablet}) {
//   font-size: 18px;
// }

const NavContainer = styled(Container)`
  display: flex;
  align-items: center;
  max-width: none;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: 600;
  line-height: 36px;
  padding-right: 20px;
  img {
    padding-right: 10px;
    width: 25.92px;
    height: 26.67px;
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
      <Logo>
        <div>
          <img src={logo} alt="Logo" />
        </div>
        <div>Logo</div>
      </Logo>
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
