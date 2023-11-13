import styled from "styled-components";
import Button from "../Reusable/Button";

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  background: ${({ theme }) => theme.footerBackground};
  margin-bottom: 0;
`;

const Head_Descr_Wrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 672px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

const Heading = styled.h2`
  color: ${({ theme }) => theme.title};
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
  color: ${({ theme }) => theme.text};
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
  width: 100%;
  max-width: 1280px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 32px 0px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 1fr);
  }
`;

const LogoCard = styled.div`
  display: flex;
  width: 100%;
  max-width: 320px;
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
    color: ${({ theme }) => theme.logosText};
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
  const {
    heading,
    supportText,
    sponsorLinkText,
    partnerSince,
    buttonText,
    sponsors,
  } = customerLogos;

  return (
    <Container>
      <Head_Descr_Wrapper>
        <Heading>{heading}</Heading>
        <SupportText>{supportText}</SupportText>
        <SponsorLink href="#">
          {sponsorLinkText}
          <img src="./icons/icon_arrownarrowright_blue_a200.svg" />
        </SponsorLink>
      </Head_Descr_Wrapper>
      <LogosContainer>
        {sponsors.map((logo, index) => (
          <LogoCard key={index}>
            <LogoItem>
              <LogoImage src={logo} alt="Brand logo" />
              <p>{partnerSince}</p>
            </LogoItem>
            <Button version="transparent">
              <Icon
                src="/icons/icon_externallink.svg"
                alt="Extermal Link Icon"
              />
              {buttonText}
            </Button>
          </LogoCard>
        ))}
      </LogosContainer>
    </Container>
  );
}

export default CustomerLogosComponent;
