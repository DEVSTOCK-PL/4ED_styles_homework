import styled from "styled-components";
import {
  ImgDribble,
  ImgFacebook,
  ImgGithub,
  ImgTwitter,
} from "../../../../public/social/index";

const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  border-top: 1px solid ${({ theme }) => theme.toggleBorder};
  background: ${({ theme }) => theme.footerBackground};
`;

const Column = styled.div`
  display: flex;
  width: 176px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

const Heading = styled.h1`
  align-self: stretch;
  color: ${({ theme }) => theme.title};
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 21px */
  text-transform: uppercase;
`;

const LogoAndSocialLinks = styled.div`
  display: flex;
  width: 384px;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const SocialLinks = styled.div`
  display: flex;
  align-items: baseline;
  gap: 20px;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  & p {
    color: ${({ theme }) => theme.title};
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
    margin: 0;
  }
`;

const Logo = styled.img`
  width: 32px;
  height: 32px;
`;

const Copyright = styled.p`
  color: ${({ theme }) => theme.text};
  text-align: center;
  align-self: stretch;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin: 0;
`;

const NavLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
  color: ${({ theme }) => theme.text};
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
`;

const NavLinks = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  align-self: stretch;
`;

function Footer({ footerData }) {
  return (
    <FooterContainer>
      <NavLinks>
        {footerData.map(({ heading, links }, index) => (
          <Column key={index}>
            <Heading>{heading}</Heading>
            {links.map((link) => (
              <NavLink key={link} to={`/${link}`}>
                {link}
              </NavLink>
            ))}
          </Column>
        ))}
      </NavLinks>
      <LogoAndSocialLinks>
        <LogoWrapper>
          <Logo src="../images/img_logo.png" alt="Flowbite Logo" />
          <p>Flowbite</p>
        </LogoWrapper>
        <Copyright>© 2022 Flowbite, Inc. All rights reserved.</Copyright>
        <SocialLinks>
          <ImgGithub width={24} height={24} />
          <ImgTwitter width={24} height={24} />
          <ImgDribble width={24} height={24} />
          <ImgFacebook width={24} height={24} />
        </SocialLinks>
      </LogoAndSocialLinks>
    </FooterContainer>
  );
}

export default Footer;
