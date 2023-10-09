import styled from "styled-components";
import Button from "../Reusable/Button";
import * as brandLogos from "../../assets/brandLogos/brandLogos";

const Container = styled.div`
  display: flex;
  width: 1440px;
  /* padding: 96px 0px; */
  flex-direction: column;
  align-items: center;
  gap: 64px;
`;

const Head_Descr_Wrapper = styled.div`
  display: flex;
  width: 672px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

const Heading = styled.h2`
  color: #fff;
  text-align: center;
  align-self: stretch;
  font-family: Inter;
  font-size: 36px;
  font-style: normal;
  font-weight: 800;
  line-height: 125%;
  letter-spacing: -0.36px;
  margin: 0;
`;

const SupportText = styled.p`
  color: #9ca3af;
  margin: 0;
  align-self: stretch;
  text-align: center;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: 150%;
`;

const SponsorLink = styled.a`
  color: #1a56db;
  text-decoration: none;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 6px;
`;

const LogosContainer = styled.div`
  width: 1280px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 32px 0px;
`;

const LogoCard = styled.div`
  display: flex;
  width: 320px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-shrink: 0;
  align-self: stretch;
`;

const LogoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  & p {
    color: #6b7280;
    text-align: center;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 20px */
    margin: 0;
  }
`;

const LogoImage = styled.img`
  width: auto;
  height: auto;
`;

const Icon = styled.img`
  margin-right: 8px;
`;

function CustomerLogosComponent({ customerLogos }) {
  // const logos = Object.values(brandLogos);

  return (
    <Container>
      <Head_Descr_Wrapper>
        <Heading>{customerLogos.heading}</Heading>
        <SupportText>{customerLogos.supportText}</SupportText>
        <SponsorLink href="#">
          {customerLogos.sponsorLinkText}
          <img src="./icons/icon_arrownarrowright_blue_a200.svg" />
        </SponsorLink>
      </Head_Descr_Wrapper>
      <LogosContainer>
        {customerLogos.sponsors.map((logo, index) => (
          <LogoCard key={index}>
            <LogoItem>
              <LogoImage src={logo} alt="Brand logo" />
              <p>{customerLogos.partnerSince}</p>
            </LogoItem>
            <Button version="transparent">
              <Icon
                src="/icons/icon_externallink.svg"
                alt="Extermal Link Icon"
              />
              {customerLogos.buttonText}
            </Button>
          </LogoCard>
        ))}
      </LogosContainer>
    </Container>
  );
}

export default CustomerLogosComponent;
