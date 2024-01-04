import styled from "styled-components";
import { useContext } from "react";

import { StyleContext } from "../App";

import { colors } from "./colors";
import { Container } from "./styleElements";
import { logo, socialLinks } from "../images";
import { breakPoints } from "../components";

const { tablet, mobile } = breakPoints;

const FooterContainer = styled(Container)`
  background-color: ${(props) => (props.darkTheme ? "#1f2a37" : colors.LightBackgroundColorTwo)};
  padding: 60px 0px;
  max-width: none;
  @media (max-width: ${mobile}) {
    margin: 0 auto;
  }
`;

const ColumnsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: ${tablet}) {
    flex-wrap: wrap;
  }
  @media (max-width: ${mobile}) {
    display: flex;
    flex-direction: column;
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
    color: ${(props) => (props.darkTheme ? "white" : "black")};
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
  const darkTheme = useContext(StyleContext);

  const columnsData = [
    ["COMPANY", "About", "Premium", "Blog", "Affiliate Program", "Get Coupon"],
    [
      "HELP AND SUPPORT",
      "Contact Us",
      "Knowledge Center",
      "Premium Support",
      "Sponsorships",
    ],
    ["Learning", "Learn Hub", "Manuals", "Tutorials", "Communities"],
    [
      "RESOURCES",
      "Third-Party Tools",
      "Illustrations",
      "Themesberg",
      "Bluehost",
      "Stock Photos",
    ],
    ["LEGAL", "Privacy Policy", "Terms & Conditions", "EULA"],
  ];
  return (
    <FooterContainer darkTheme = {darkTheme}>
      <ColumnsWrapper>
        {columnsData.map((column, columnIndex) => (
          <Column darkTheme={darkTheme} key={columnIndex}>
            {column.map((item, itemIndex) => (
              <div key={itemIndex}>{item}</div>
            ))}
          </Column>
        ))}
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
