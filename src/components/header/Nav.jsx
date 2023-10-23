import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Container } from '../Container';
import vector from '../../assets/vector.svg';

const NavContainer = styled(Container)`
  margin-left: 100px;

  &.mobileNav {
    display: none;
  }

  .link {
    color: #fff;
    text-decoration: none;

    &:active {
      color: #000;
    }
  }

  .active {
    color: #00f;
  }

  @media (max-width: 1536px) {
    margin-left: 50px;
    .ul {
      column-gap: 30px;
    }
  }
  @media (max-width: 1280px) {
    margin-left: 30px;
    .ul {
      column-gap: 20px;
    }
  }
  @media (max-width: 1024px) {
    margin-left: 25px;
    .ul {
      column-gap: 15px;
    }
  }
  @media (max-width: 768px) {
    margin-left: 20px;
    .ul {
      column-gap: 10px;
    }
    .link {
      font-size: 14px;
    }
  }
  @media (max-width: 640px) {
    &.desktopNav {
      display: none;
    }
    &.mobileNav {
      display: flex;
    }
  }
`;

const StyledImg = styled.img`
  width: 23px;
  height: 20px;
`;

export const Nav = () => {
  return (
    <>
      <NavContainer as="nav" className="desktopNav">
        <Container as="ul" className="ul" columnGap="50px">
          <Container as="li">
            <NavLink className="link" to="/">
              HOME
            </NavLink>
          </Container>
          <Container as="li">
            <NavLink className="link" to="/news">
              NEWS
            </NavLink>
          </Container>
          <Container as="li">
            <NavLink className="link" to="/events">
              EVENTS
            </NavLink>
          </Container>
          <Container as="li">
            <NavLink className="link" to="/contact">
              CONTACT
            </NavLink>
          </Container>
          <Container as="li">
            <NavLink className="link" to="/list">
              RICKANDMORTY
            </NavLink>
          </Container>
        </Container>
      </NavContainer>
      <NavContainer className="mobileNav">
        <StyledImg src={vector} alt="logo_menu" />
      </NavContainer>
    </>
  );
};
