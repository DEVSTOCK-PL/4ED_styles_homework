import styled from 'styled-components';

import { Logo } from './Logo';
import { Nav } from './Nav';
import { Login } from './Login';
import { Container } from '../Container';

const NavbarContainer = styled(Container)`
  justify-content: space-between;
  padding: 24px 40px 0;

  @media (max-width: 768px) {
    padding: 24px 20px 0;
  }
  @media (max-width: 640px) {
    padding: 24px 10px 0;

    .mobile {
      justify-content: space-between;
      width: 100%;
    }
  }
`;

export const Navbar = () => {
  return (
    <NavbarContainer>
      <Container className="mobile">
        <Logo />
        <Nav />
      </Container>

      <Login />
    </NavbarContainer>
  );
};
