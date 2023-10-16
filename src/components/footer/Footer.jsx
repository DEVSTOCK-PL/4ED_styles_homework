import styled from 'styled-components';
import { Column } from './Column';
import logo_flowbite from '../../assets/logo.svg';
import logo_github from './github.svg';
import logo_twitter from './twitter.svg';
import logo_dribble from './dribble.svg';
import logo_facebook from './facebook.svg';

const arrColumn1 = [
  { id: crypto.randomUUID(), name: 'About', href: '#' },
  { id: crypto.randomUUID(), name: 'Premium', href: '#' },
  { id: crypto.randomUUID(), name: 'Blog', href: '#' },
  { id: crypto.randomUUID(), name: 'Affiliate Program', href: '#' },
  { id: crypto.randomUUID(), name: 'Get Coupon', href: '#' },
];

const arrColumn2 = [
  { id: crypto.randomUUID(), name: 'Contact Us', href: '#' },
  { id: crypto.randomUUID(), name: 'Knowledge Center', href: '#' },
  { id: crypto.randomUUID(), name: 'Premium Support', href: '#' },
  { id: crypto.randomUUID(), name: 'Sponsorships', href: '#' },
];
const arrColumn3 = [
  { id: crypto.randomUUID(), name: 'Learn Hub', href: '#' },
  { id: crypto.randomUUID(), name: 'Manuals', href: '#' },
  { id: crypto.randomUUID(), name: 'Tutorials', href: '#' },
  { id: crypto.randomUUID(), name: 'Communities', href: '#' },
];

const arrColumn4 = [
  { id: crypto.randomUUID(), name: 'Third-Party Tools', href: '#' },
  { id: crypto.randomUUID(), name: 'Illustrations', href: '#' },
  { id: crypto.randomUUID(), name: 'Themesberg', href: '#' },
  { id: crypto.randomUUID(), name: 'Bluehost', href: '#' },
  { id: crypto.randomUUID(), name: 'Stock Photos', href: '#' },
];

const arrColumn5 = [
  { id: crypto.randomUUID(), name: 'Privacy Policy', href: '#' },
  { id: crypto.randomUUID(), name: 'Terms & Conditions', href: '#' },
  { id: crypto.randomUUID(), name: 'EULA', href: '#' },
];

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 96px 40px 64px;
  background-color: #1f2a37;
  border: solid #374151;
  border-width: 1px 0;
  gap: 64px;

  @media (max-width: 768px) {
    padding: 96px 20px 64px;
  }
  @media (max-width: 640px) {
    align-items: start;
    padding: 32px 10px 64px;
  }
`;

const NavLinks = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 24px;
  }
`;

const LogoAndSocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media (max-width: 640px) {
    align-items: start;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  gap: 12px;
  font-size: 24px;
  font-weight: 600;
`;

const Text = styled.p`
  color: #9ca3af;
  font-size: 16px;
  font-weight: 400;
`;

const SocialLinks = styled.div`
  display: flex;
  color: #9ca3af;
  gap: 20px;
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <NavLinks>
        <Column heading="company" array={arrColumn1} />
        <Column heading="help and support" array={arrColumn2} />
        <Column heading="learning" array={arrColumn3} />
        <Column heading="resources" array={arrColumn4} />
        <Column heading="legal" array={arrColumn5} />
      </NavLinks>
      <LogoAndSocialLinks>
        <Logo>
          <img src={logo_flowbite} alt="logo_flowbite" />
          Flowbite
        </Logo>
        <Text>© 2022 Flowbite, Inc. All rights reserved.</Text>
        <SocialLinks>
          <a href="#">
            <img src={logo_github} alt="logo_github" />
          </a>
          <a href="#">
            <img src={logo_twitter} alt="logo_twitter" />
          </a>
          <a href="#">
            <img src={logo_dribble} alt="logo_dribble" />
          </a>
          <a href="#">
            <img src={logo_facebook} alt="logo_facebook" />
          </a>
        </SocialLinks>
      </LogoAndSocialLinks>
    </FooterContainer>
  );
};
