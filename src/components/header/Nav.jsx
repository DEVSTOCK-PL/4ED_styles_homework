import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { Container } from '../Container';

import vector from '../../assets/vector.svg';

const data = [
  { id: crypto.randomUUID(), to: '/', text: 'HOME' },
  { id: crypto.randomUUID(), to: '/news', text: 'NEWS' },
  { id: crypto.randomUUID(), to: '/events', text: 'EVENTS' },
  { id: crypto.randomUUID(), to: '/contact', text: 'CONTACT' },
  { id: crypto.randomUUID(), to: '/list', text: 'RICKANDMORTY' },
];

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

const UlContainer = styled(Container)`
  column-gap: 50px;
`;

const StyledImg = styled.img`
  width: 23px;
  height: 20px;
`;

export const Nav = () => {
  return (
    <>
      <NavContainer as="nav" className="desktopNav">
        <UlContainer as="ul" className="ul">
          {data.map(({ id, to, text }) => (
            <Container key={id} as="li">
              <NavLink className="link" to={to}>
                {text}
              </NavLink>
            </Container>
          ))}
        </UlContainer>
      </NavContainer>
      <NavContainer className="mobileNav">
        <StyledImg src={vector} alt="logo_menu" />
      </NavContainer>
    </>
  );
};
