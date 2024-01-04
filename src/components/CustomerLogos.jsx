import styled from "styled-components";
import { useContext } from "react";

import { StyleContext } from "../App";

import SponsorCard from "./SponsorCard";

import { Heading, CenteredLink, SupportingText } from "./styleElements";

import {
  Stripe,
  Intel,
  Fedex,
  Tesla,
  Netflix,
  Bmw,
  Twitch,
  Nestle,
  Cocacola,
  littleArow,
  Spotify,
  Shell,
  Disnay,
} from "../images";

import BreakPoints from "./breakPoints";
import { colors } from "./colors";

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
  background-color: ${(props) =>
    props.darkTheme ? "#1f2a37" : colors.LightBackgroundColorTwo};
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

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function CostomersLogos() {
  const darkTheme = useContext(StyleContext);

  const data3 = [
    [{ component: Stripe }, { component: Intel }, { component: Fedex }],
    [{ component: Spotify }, { component: Shell }, { component: Disnay }],
    [{ component: Tesla }, { component: Netflix }, { component: Bmw }],
    [{ component: Twitch }, { component: Nestle }, { component: Cocacola }],
  ];

  return (
    <CostumersLogosContainer darkTheme={darkTheme}>
      <CentredHeading>Donors, Partners & Sponsors</CentredHeading>
      <CenterSupportingText>
        Here at flowbite we focus on markets where technology, innovation,
      </CenterSupportingText>
      <CenterSupportingText>
        innovation, and capital can unlock long-term value.
      </CenterSupportingText>
      <CenteredLink>
        <a href="disabled" >Become a sponsor</a>
        <img src={littleArow} alt="littleArow-img" />
      </CenteredLink>
      <SponsorsCardWrapper>
        {data3.map((column, columnIndex) => (
          <div key={columnIndex}>
            {column.map(({ component: Icon }, index) => (
              <Icons key={index}>
                <Icon size={100} />
                <SponsorCard />
              </Icons>
            ))}
          </div>
        ))}
      </SponsorsCardWrapper>
    </CostumersLogosContainer>
  );
}

export default CostomersLogos;
