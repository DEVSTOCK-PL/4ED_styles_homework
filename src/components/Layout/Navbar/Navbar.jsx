import styled from "styled-components";
import LogoComponent from "./Logo";
import NavLinksComponent from "./NavLinks";
import CTAButtonComponent from "./CTAButton";

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  color: white;
`;

const NavbarWrapper = styled.nav`
  display: flex;
  width: 1280px;
  align-items: center;
  gap: 64px;
`;

export default function NavbarComponent({ logoProps, links, ctaProps }) {
  return (
    <NavbarContainer>
      <NavbarWrapper>
        <LogoComponent {...logoProps} />
        <NavLinksComponent links={links} />
        <CTAButtonComponent {...ctaProps} />
      </NavbarWrapper>
    </NavbarContainer>
  );
}
