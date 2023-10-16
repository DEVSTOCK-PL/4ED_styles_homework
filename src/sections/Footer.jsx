import styled from "styled-components";
import Button from "../components/Button";
import Logotyp from "../assets/Logo.png";
import github from "../assets/github.png";
import twitter from "../assets/twitter.png";
import dribbble from "../assets/dribbble.png";
import facebook from "../assets/facebook.png";

const Container = styled.div`
  width: 1440px;
  height: 569px;
  background-color: #1f2a37;
  border-top: 1px solid #374151;
  padding-top: 96px;
  padding-bottom: 64px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;

  @media (max-width: 640px) {
    width: 375px;
    height: auto;
    padding-top: 10px;
  }
  @media (min-width: 641px) and (max-width: 768px) {
    width: 675px;
    height: auto;
    padding-top: 10px;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    width: 980px;
    height: auto;
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    width: 1220px;
    height: auto;
    padding-bottom: 30px;
    padding-top: 30px;
  }
`;
const Content = styled.div`
  width: 1280px;
  height: 409px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;

  @media (max-width: 640px) {
    width: 343px;
    height: auto;
    padding-top: 10px;
  }
  @media (min-width: 641px) and (max-width: 768px) {
    width: 343px;
    height: auto;
    padding-top: 10px;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    width: 900px;
    height: auto;
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    width: 1160px;
    height: auto;
  }
`;
const NavLinks = styled.div`
  width: 1280px;
  height: 221px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 640px) {
    width: 343px;
    height: auto;
    flex-direction: column;
    padding-top: 96px;
  }
  @media (min-width: 641px) and (max-width: 768px) {
    width: 343px;
    height: auto;
    flex-direction: column;
    padding-top: 96px;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    justify-content: center;
    width: 900px;
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    width: 1160px;
    height: auto;
    justify-content: space-around;
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

  @media (max-width: 640px) {
    width: 343px;
    height: auto;
    align-items: start;
  }
  @media (min-width: 641px) and (max-width: 768px) {
    width: 343px;
    height: auto;
    align-items: center;
  }
`;
const Column = styled.div`
  width: 176px;
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
  width: 176px;
  height: 21px;
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
  width: 176px;
  height: 24px;
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
const Svg = styled.svg`
  width: 32px;
  height: 32px;
`;
const CopyRight = styled.div`
  width: 384px;
  height: 24px;
  line-height: 24px;
  font-size: 16px;
  font-weight: 400;
  color: #9ca3af;
  text-align: center;

  @media (max-width: 640px) {
    width: 343px;
    height: auto;
    text-align: left;
  }
  @media (min-width: 641px) and (max-width: 768px) {
    width: 343px;
    height: auto;
    text-align: center;
  }
`;
const SocialLinks = styled.div`
  width: 156px;
  height: 24px;
  display: flex;
  gap: 20px;

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
            <Svg>
              <image xlinkHref={Logotyp} />
            </Svg>
            Flowbite
          </LogoFlowbite>
          <CopyRight>© 2022 Flowbite, Inc. All rights reserved.</CopyRight>
          <SocialLinks>
            <Button
              width="24px"
              height="24px"
              backgroundColor="transparent"
              iconLeft={github}
              marginRight="0px"
            />
            <Button
              width="24px"
              height="24px"
              backgroundColor="transparent"
              iconLeft={twitter}
              marginRight="0px"
            />
            <Button
              width="24px"
              height="24px"
              backgroundColor="transparent"
              iconLeft={dribbble}
              marginRight="0px"
            />
            <Button
              width="24px"
              height="24px"
              backgroundColor="transparent"
              iconLeft={facebook}
              marginRight="0px"
            />
          </SocialLinks>
        </LogoAndSocialLinks>
      </Content>
    </Container>
  );
};
export default Footer;
