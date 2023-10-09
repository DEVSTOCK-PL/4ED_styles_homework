import styled from 'styled-components';
import { Container } from '../Container';
import vector from '../../assets/vector.svg';

const NavContainer = styled(Container)`
  margin-left: 100px;

  &.mobileNav {
    display: none;
  }

  @media (max-width: 1536px) {
    margin-left: 50px;
    .ul {
      column-gap: 30px;
    }
  }
  @media (max-width: 1024px) {
    margin-left: 30px;
    .ul {
      column-gap: 20px;
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

const Link = styled.a`
  color: white;
  text-decoration: none;
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
            <Link className="link" href="#">
              Company
            </Link>
          </Container>
          <Container as="li">
            <Link className="link" href="#">
              Marketplace
            </Link>
          </Container>
          <Container as="li">
            <Link className="link" href="#">
              Features
            </Link>
          </Container>
          <Container as="li">
            <Link className="link" href="#">
              Team
            </Link>
          </Container>
          <Container as="li">
            <Link className="link" href="#">
              Contact
            </Link>
          </Container>
        </Container>
      </NavContainer>
      <NavContainer className="mobileNav">
        <StyledImg src={vector} alt="logo_menu" />
      </NavContainer>
    </>
  );
};
