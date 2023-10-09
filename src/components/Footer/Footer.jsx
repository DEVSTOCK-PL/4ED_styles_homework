import styled from "styled-components";

const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  padding-top: 96px;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  margin-bottom: 64px;

  border-top: 1px solid #374151;
  background: #1f2a37;
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
  color: #fff;
  /* uppercase/text-sm/font-semibold */
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
  align-items: center;
  gap: 20px;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  & p {
    color: #fff;
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
  color: #9ca3af;
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

  color: #9ca3af;
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
        {footerData.map((column, index) => (
          <Column key={index}>
            <Heading>{column.heading}</Heading>
            {column.links.map((link, i) => (
              <NavLink key={i} to={`/${link}`}>
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
          <img src="../social/img_dribble.svg" alt={"Dribble logo"} />
          <img src="../social/img_facebook.svg" alt={"Facebook logo"} />
          <img src="../social/img_github.svg" alt={"Github logo"} />
          <img src="../social/img_twitter.svg" alt={"Twitter logo"} />
        </SocialLinks>
      </LogoAndSocialLinks>
    </FooterContainer>
  );
}

export default Footer;
