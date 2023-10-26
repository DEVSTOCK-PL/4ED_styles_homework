import styled from "styled-components";
import Heading from "./styleElements/Heading";
import CenteredLink from "./styleElements/CenteredLink";
import SponsorsCards from "./SponsorCard";
import littleArow from "../images/littleArow.png";
import stripe from "../images/stripe.svg";
import intel from "../images/intel.svg";
import fedex from "../images/fedex.svg";
import spotifiy from "../images/spotify.svg";
import shell from "../images/shell.svg";
import disnay from "../images/disnay.svg";
import tesla from "../images/tesla.svg";
import netflix from "../images/netflix.svg";
import bmw from "../images/bmw.svg";
import twitch from "../images/twitch.svg";
import nestle from "../images/nestle.svg";
import cocacola from "../images/cocacola.svg";
import SupportingText from "./styleElements/SupportingText";

const CentredHeading = styled(Heading)`
  text-align: center;
`;

const SponsorsCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  justify-content: space-around;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const CostumersLogosContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  background-color: #1f2a37;
  border: 1px solid#4B5563;
  width: 100%;
  padding-top: 70px;
  padding-bottom: 70px;
`;
const CenterSupportingText = styled(SupportingText)`
  text-align: center;
`;

function CostomersLogos() {
  return (
    <>
      <CostumersLogosContainer>
        <CentredHeading>Donors, Partners & Sponsors</CentredHeading>
        <CenterSupportingText>
          Here at flowbite we focus on markets where technology, innovation, and
          capital can unlock long-term value.
        </CenterSupportingText>
        <CenteredLink>
          <a href="url">Become a sponsor</a>
          <img src={littleArow} alt="littleArow-img" />
        </CenteredLink>
        <SponsorsCardWrapper>
          <Column>
            <SponsorsCards img={stripe} />
            <SponsorsCards img={intel} />
            <SponsorsCards img={fedex} />
          </Column>
          <Column>
            <SponsorsCards img={spotifiy} />
            <SponsorsCards img={shell} />
            <SponsorsCards img={disnay} />
          </Column>
          <Column>
            <SponsorsCards img={tesla} />
            <SponsorsCards img={netflix} />
            <SponsorsCards img={bmw} />
          </Column>
          <Column>
            <SponsorsCards img={twitch} />
            <SponsorsCards img={nestle} />
            <SponsorsCards img={cocacola} />
          </Column>
        </SponsorsCardWrapper>
      </CostumersLogosContainer>
    </>
  );
}

export default CostomersLogos;
