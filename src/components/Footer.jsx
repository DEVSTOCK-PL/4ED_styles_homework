import styled from "styled-components";
import Container from "./styleElements/Container";
import logo from "../images/logo.png";
import socialLinks from "../images/socialLinks.png";

const breakpoints = {
  smallMobile: "565px",
  mobile: "768px",
  tablet: "1024px",
  desktop: "1200px",
};

const FooterContainer = styled(Container)`
  background-color:#1f2a37;
  padding: 60px 0px;
  max-width: none;
`

const ColumnsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: ${breakpoints.tablet}) {
    flex-wrap: wrap;
  }
`;

const Column = styled.div`
  div {
    margin-bottom: 10px;
  }
  color: #9ca3af;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  padding: 0px 30px;

  div:first-child {
    color: #ffff;
    font-size: 14px;
    font-weight: 600;
    line-height: 25px;
  }
`;

const LogoStyle = styled.img`
  width: 25.92px;
  height: 26.67;
  margin-right: 10px;
`;

const SocialMediaLogos = styled.img`
  width: 156px;
  height: 24px;
`;

const LogoSocial = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  div:first-child {
    display: flex;
    align-items: center;
    font-size: 24px;
    font-weight: 600;
    line-height: 36px;
    padding-top: 20px;
    padding-bottom: 10px;
  }
  div:nth-child(2) {
    color: #9ca3af;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <ColumnsWrapper>
        <Column>
          <div>COMPAMY</div>
          <div>About</div>
          <div>Premium</div>
          <div>Blog</div>
          <div>Affiliate Program</div>
          <div>Get Coupon</div>
        </Column>
        <Column>
          <div>HELP AND SUPPORT</div>
          <div>Contact Us</div>
          <div>Knowledge Center</div>
          <div>Premium Support</div>
          <div>Sponsorships</div>
        </Column>
        <Column>
          <div>Learning</div>
          <div>Learn Hub</div>
          <div>Manuals</div>
          <div>Tutorials</div>
          <div>Communities</div>
        </Column>
        <Column>
          <div>RESOURCES</div>
          <div>Third-Party Tools</div>
          <div>Illustrations</div>
          <div>Themesberg</div>
          <div>Bluehost</div>
          <div>Stock Photos</div>
        </Column>
        <Column>
          <div>LEGAL</div>
          <div>Privacy Policy</div>
          <div>Terms & Conditions</div>
          <div>EULA</div>
        </Column>
      </ColumnsWrapper>
      <LogoSocial>
        <div>
          <LogoStyle src={logo} alt="lgog" />
          FlowBite
        </div>
        <div>© 2022 Flowbite, Inc. All rights reserved.</div>
        <SocialMediaLogos src={socialLinks} alt="Social-logos" />
      </LogoSocial>
    </FooterContainer>
  );
}

export default Footer;
