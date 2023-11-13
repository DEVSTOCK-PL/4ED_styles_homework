import styled from 'styled-components';

import { Column } from './Column';

import {
  logo_github,
  logo_twitter,
  logo_dribble,
  logo_facebook,
} from './index';
import logo_flowbite from '../../assets/logo.svg';

const data = [
  {
    heading: 'company',
    array: [
      { id: crypto.randomUUID(), name: 'About', href: '#' },
      { id: crypto.randomUUID(), name: 'Premium', href: '#' },
      { id: crypto.randomUUID(), name: 'Blog', href: '#' },
      { id: crypto.randomUUID(), name: 'Affiliate Program', href: '#' },
      { id: crypto.randomUUID(), name: 'Get Coupon', href: '#' },
    ],
  },
  {
    heading: 'help and support',
    array: [
      { id: crypto.randomUUID(), name: 'Contact Us', href: '#' },
      { id: crypto.randomUUID(), name: 'Knowledge Center', href: '#' },
      { id: crypto.randomUUID(), name: 'Premium Support', href: '#' },
      { id: crypto.randomUUID(), name: 'Sponsorships', href: '#' },
    ],
  },
  {
    heading: 'learning',
    array: [
      { id: crypto.randomUUID(), name: 'Learn Hub', href: '#' },
      { id: crypto.randomUUID(), name: 'Manuals', href: '#' },
      { id: crypto.randomUUID(), name: 'Tutorials', href: '#' },
      { id: crypto.randomUUID(), name: 'Communities', href: '#' },
    ],
  },
  {
    heading: 'resources',
    array: [
      { id: crypto.randomUUID(), name: 'Third-Party Tools', href: '#' },
      { id: crypto.randomUUID(), name: 'Illustrations', href: '#' },
      { id: crypto.randomUUID(), name: 'Themesberg', href: '#' },
      { id: crypto.randomUUID(), name: 'Bluehost', href: '#' },
      { id: crypto.randomUUID(), name: 'Stock Photos', href: '#' },
    ],
  },
  {
    heading: 'legal',
    array: [
      { id: crypto.randomUUID(), name: 'Privacy Policy', href: '#' },
      { id: crypto.randomUUID(), name: 'Terms & Conditions', href: '#' },
      { id: crypto.randomUUID(), name: 'EULA', href: '#' },
    ],
  },
];

const dataLinksArr = [
  { id: crypto.randomUUID(), href: '#', src: logo_github, alt: 'logo_github' },
  {
    id: crypto.randomUUID(),
    href: '#',
    src: logo_twitter,
    alt: 'logo_twitter',
  },
  {
    id: crypto.randomUUID(),
    href: '#',
    src: logo_dribble,
    alt: 'logo_dribble',
  },
  {
    id: crypto.randomUUID(),
    href: '#',
    src: logo_facebook,
    alt: 'logo_facebook',
  },
];

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 96px 40px 64px;
  /* background-color: #1f2a37; */
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
  gap: 12px;
  font-size: 24px;
  font-weight: 600;
`;

const Text = styled.p`
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
    <FooterContainer className="footerContainer">
      <NavLinks className="navLinks">
        {data.map(({ heading, array }) => (
          <Column key={heading} heading={heading} array={array} />
        ))}
      </NavLinks>
      <LogoAndSocialLinks>
        <Logo>
          <img src={logo_flowbite} alt="logo_flowbite" />
          Flowbite
        </Logo>
        <Text>© 2022 Flowbite, Inc. All rights reserved.</Text>
        <SocialLinks>
          {dataLinksArr.map(({ id, href, src, alt }) => (
            <a key={id} href={href}>
              <img src={src} alt={alt} />
            </a>
          ))}
        </SocialLinks>
      </LogoAndSocialLinks>
    </FooterContainer>
  );
};
