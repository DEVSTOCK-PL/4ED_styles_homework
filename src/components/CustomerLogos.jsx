import styled from "styled-components";

import SponsorCard from "./SponsorCard";

import { Heading, CenteredLink, SupportingText } from "./styleElements";

import {
  littleArow,
  stripe,
  intel,
  fedex,
  spotify,
  shell,
  disnay,
  tesla,
  netflix,
  bmw,
  twitch,
  nestle,
  cocacola,
} from "../images";

import BreakPoints from "./breakPoints";

const CentredHeading = styled(Heading)`
  text-align: center;
  padding-bottom: 10px;
`;
const CenterSupportingText = styled(SupportingText)`
  text-align: center;
  padding-top: 0px;
  padding-bottom: 0px;
`;

const CostumersLogosContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  background-color: #1f2a37;
  border-bottom: 1px solid#4B5563;
  border-top: 1px solid#4B5563;
  width: 100%;
  padding-top: 70px;
  padding-bottom: 70px;
`;
const SponsorsCardWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  @media (max-width: ${BreakPoints.tablet}) {
    display: flex;
    flex-wrap: wrap;
  }
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 10px;
`;

function CostomersLogos() {
  const data = [
    [stripe, intel, fedex],
    [spotify, shell, disnay],
    [tesla, netflix, bmw],
    [twitch, nestle, cocacola],
  ];

  return (
    <>
      <CostumersLogosContainer>
        <CentredHeading>Donors, Partners & Sponsors</CentredHeading>
        <CenterSupportingText>
          Here at flowbite we focus on markets where technology, innovation,
        </CenterSupportingText>
        <CenterSupportingText>
          innovation, and capital can unlock long-term value.
        </CenterSupportingText>
        <CenteredLink>
          <a href="url">Become a sponsor</a>
          <img src={littleArow} alt="littleArow-img" />
        </CenteredLink>
        <SponsorsCardWrapper>
          {data.map((column, columnIndex) => (
            <Column key={columnIndex}>
              {column.map((card, cardIndex) => (
                <SponsorCard key={cardIndex} img={card} />
              ))}
            </Column>
          ))}
        </SponsorsCardWrapper>
      </CostumersLogosContainer>
    </>
  );
}

export default CostomersLogos;
