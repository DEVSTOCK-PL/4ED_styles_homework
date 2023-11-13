import styled from "styled-components";
import LogoComponent from "./Logo";
import NavLinksComponent from "./NavLinks";
import CTAButtonComponent from "./CTAButton";
import HamburgerMenu from "./Hamburger";
import ThemeButton from "../../Reusable/ThemeButton";

const NavbarContainer = styled.div`
  width: 80%;
  color: ${({ theme }) => theme.title};

  @media (max-width: 1350px) {
    margin-left: 16px;
    margin-right: 16px;
    align-self: stretch;
  }
  @media (min-width: 1800px) {
    width: 60%;
  }
`;

const NavbarWrapper = styled.nav`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 64px;

  @media (max-width: 1200px) {
    display: none;
  }
`;

const MobileNavbarWrapper = styled.nav`
  display: none;

  @media (max-width: 1200px) {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
  }
`;

export default function NavbarComponent({ logoProps, links, ctaProps }) {
  return (
    <NavbarContainer>
      <NavbarWrapper>
        <LogoComponent {...logoProps} />
        <NavLinksComponent links={links} />
        <ThemeButton text="Click me to change theme" />
        <CTAButtonComponent {...ctaProps} />
      </NavbarWrapper>
      <MobileNavbarWrapper>
        <LogoComponent {...logoProps} />
        <HamburgerMenu links={links} ctaProps={ctaProps} />
      </MobileNavbarWrapper>
    </NavbarContainer>
  );
}
