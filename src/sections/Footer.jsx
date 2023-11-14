import styled from "styled-components";

import {
  Dribbble,
  GitHub,
  Facebook,
  Twitter,
  Flowbite,
} from "../assets/svg_components";

const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  height: 569px;
  border-top: 1px solid #374151;
  padding-top: 96px;
  padding-bottom: 64px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;

  @media (min-width: 1025px) and (max-width: 1280px) {
    max-width: 1280px;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    max-width: 1024px;
  }
  @media (min-width: 641px) and (max-width: 768px) {
    max-width: 768px;
    height: auto;
    padding-top: 10px;
  }
  @media (max-width: 640px) {
    max-width: 640px;
    height: auto;
    padding-top: 10px;
  }
`;

const Content = styled.div`
  width: 89%;
  max-width: 1280;
  height: 409px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;

  @media (min-width: 641px) and (max-width: 768px) {
    max-width: 768px;
    height: auto;
    padding-top: 10px;
  }
  @media (max-width: 640px) {
    max-width: 640px;
    height: auto;
    padding-top: 10px;
  }
`;

const NavLinks = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;

  @media (min-width: 641px) and (max-width: 768px) {
    width: 343px;
    height: auto;
    flex-direction: column;
    padding-top: 96px;
  }
  @media (max-width: 640px) {
    width: 343px;
    height: auto;
    flex-direction: column;
    padding-top: 96px;
  }
`;

const LogoAndSocialLinks = styled.div`
  width: 384px;
  height: 124px;
  display: flex;
  gap: 20px;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;

  @media (min-width: 641px) and (max-width: 768px) {
    width: 343px;
    height: auto;
    align-items: center;
  }
  @media (max-width: 640px) {
    width: 343px;
    height: auto;
    align-items: start;
  }
`;

const Column = styled.div`
  width: 14%;
  height: 221px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 640px) {
    width: 343px;
    height: auto;
    align-items: start;
    padding-top: 36px;
  }
  @media (min-width: 641px) and (max-width: 768px) {
    width: 343px;
    height: auto;
    align-items: center;
    padding-top: 36px;
  }
`;

const HeadingLinks = styled.div`
  width: 100%;
  height: auto;
  color: #ffffff;
  line-height: 21px;
  font-size: 14px;
  font-weight: 500;
  text-align: left;

  @media (min-width: 641px) and (max-width: 768px) {
    text-align: center;
  }
`;

const Link = styled.a`
  width: 100%;
  height: auto;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #9ca3af;
  text-align: left;

  @media (min-width: 641px) and (max-width: 768px) {
    text-align: center;
  }
`;

const LogoFlowbite = styled.div`
  width: 144px;
  height: 36px;
  display: flex;
  gap: 12px;
  font-size: 24px;
  font-weight: 600;
  line-height: 36px;
`;

const CopyRight = styled.div`
  width: 384px;
  height: 24px;
  line-height: 24px;
  font-size: 16px;
  font-weight: 400;
  color: #9ca3af;
  text-align: center;

  @media (min-width: 641px) and (max-width: 768px) {
    width: 343px;
    height: auto;
    text-align: center;
  }
  @media (max-width: 640px) {
    width: 343px;
    height: auto;
    text-align: left;
  }
`;

const SocialLinks = styled.div`
  width: 160px;
  height: 28px;
  display: flex;
  gap: 15px;

  @media (max-width: 640px) {
    width: 156px;
    height: auto;
    align-items: left;
  }
  @media (min-width: 641px) and (max-width: 768px) {
    width: 156px;
    height: auto;
    align-items: center;
  }
`;

const SocialButton = styled.button`
  width: 28px;
  height: 28px;
  background-color: transparent;
  border: none;

  &:active {
    border: 1px solid #1a56db;
  }
`;

const Footer = () => {
  return (
    <Container>
      <Content>
        <NavLinks>
          <Column>
            <HeadingLinks>COMPANY</HeadingLinks>
            <Link>About</Link>
            <Link>Premium</Link>
            <Link>Blog</Link>
            <Link>Affiliate Program</Link>
            <Link>Get Coupon</Link>
          </Column>
          <Column>
            <HeadingLinks>HELP AND SUPPORT</HeadingLinks>
            <Link>Contact Us</Link>
            <Link>Knowledge Center</Link>
            <Link>Premium Support</Link>
            <Link>Sponsorships</Link>
          </Column>
          <Column>
            <HeadingLinks>LEARNING</HeadingLinks>
            <Link>Learn Hub</Link>
            <Link>Manuals</Link>
            <Link>Tutorials</Link>
            <Link>Communities</Link>
          </Column>
          <Column>
            <HeadingLinks>RESOURCES</HeadingLinks>
            <Link>Third-Party Tools</Link>
            <Link>Illustration</Link>
            <Link>Themesberg</Link>
            <Link>Bluehost</Link>
            <Link>Stock Photos</Link>
          </Column>
          <Column>
            <HeadingLinks>LEGAL</HeadingLinks>
            <Link>Privacy Policy</Link>
            <Link>Terms & Conditions</Link>
            <Link>EULA</Link>
          </Column>
        </NavLinks>
        <LogoAndSocialLinks>
          <LogoFlowbite>
            <Flowbite />
            Flowbite
          </LogoFlowbite>
          <CopyRight>© 2022 Flowbite, Inc. All rights reserved.</CopyRight>
          <SocialLinks>
            <SocialButton>
              <GitHub />
            </SocialButton>
            <SocialButton>
              <Twitter />
            </SocialButton>
            <SocialButton>
              <Dribbble />
            </SocialButton>
            <SocialButton>
              <Facebook />
            </SocialButton>
          </SocialLinks>
        </LogoAndSocialLinks>
      </Content>
    </Container>
  );
};
export default Footer;
