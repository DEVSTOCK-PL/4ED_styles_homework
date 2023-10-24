import styled from "styled-components";

import {
  ArrowRightBlue,
  ExternalLink,
  Stripe,
  Intel,
  FedEx,
  CocaCola,
  Disney,
  Spotify,
  Tesla,
  Twitch,
  Shell,
  Netflix,
  Nestle,
  Bmw,
} from "../assets/svg_components";

const text1 = "Donors, Partners & Sponsors";
const text2 =
  "Here at flowbite we focus on markets where technology, innovation, and capital can unlock long-term value.";

const Container = styled.div`
  background-color: #1f2a37;
  width: 100%;
  max-width: 1440px;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 64px;
  padding-top: 96px;
  border-top: 1px solid #374151;
  border-bottom: 1px solid #374151;

  @media (min-width: 1025px) and (max-width: 1280px) {
    max-width: 1280px;
    padding-top: 66px;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    max-width: 1024px;
    padding-top: 46px;
  }
  @media (min-width: 641px) and (max-width: 768px) {
    max-width: 768px;
    padding-top: 36px;
  }
  @media (max-width: 640px) {
    max-width: 640px;
    padding-top: 36px;
  }
`;
const Haeding = styled.div`
  width: 672px;
  height: 161px;
  gap: 16px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media (min-width: 641px) and (max-width: 768px) {
    width: 343px;
    height: auto;
  }
  @media (max-width: 640px) {
    width: 343px;
    height: auto;
  }
`;

const Logos = styled.div`
  width: 89%;
  height: auto;
  gap: 32px;
  display: flex;
  align-items: space-between;
  flex-direction: column;
  padding-bottom: 50px;

  @media (min-width: 641px) and (max-width: 768px) {
    width: 543px;
    height: auto;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }
  @media (max-width: 640px) {
    width: 443px;
    height: auto;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }
`;

const Row = styled.div`
  width: 100%;
  height: 132px;
  display: flex;
  justify-content: space-between;

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 100%;
    height: auto;
    justify-content: space-around;
  }
  @media (min-width: 641px) and (max-width: 768px) {
    width: 443px;
    height: auto;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: space-between;
  }
  @media (max-width: 640px) {
    width: 443px;
    height: auto;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: space-between;
  }
`;

const Card = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  width: 180px;
  height: 132px;
  gap: 20px;

  @media (min-width: 641px) and (max-width: 768px) {
    padding-bottom: 40px;
    gap: 25px;
  }
  @media (max-width: 640px) {
    padding-bottom: 40px;
    gap: 25px;
  }
`;

const P = styled.p`
  line-height: 20px;
  color: #6b7280;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  padding: 0;
  margin: 0;
`;

const Title1 = styled.p`
  width: 100%;
  height: auto;
  font-size: 36px;
  line-height: 45px;
  font-weight: 800;
  margin: 0;

  @media (min-width: 641px) and (max-width: 768px) {
    font-size: 30px;
    line-height: 37px;
  }
  @media (max-width: 640px) {
    font-size: 30px;
    line-height: 37px;
    min-width: 350px;
  }
`;

const TextSupporting1 = styled.p`
  width: 100%;
  height: auto;
  font-size: 20px;
  line-height: 30px;
  font-weight: 400;
  margin: 0;
  color: #9ca3af;

  @media (min-width: 641px) and (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

const TransparentButton = styled.button`
  width: 188px;
  height: 24px;
  border-radius: 8px;
  color: #1c64f2;
  background-color: transparent;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: start;
  border: none;
  gap: 8px;
  margin-left: 0;
  padding-left: 0;

  &:active {
    color: #fff;
  }
`;

const GrayButton = styled.button`
  width: 122px;
  height: 34px;
  border-radius: 8px;
  color: #9ca3af;
  background-color: transparent;
  font-size: 12px;
  line-height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #4b5563;
  gap: 8px;
  margin-left: 0;
  padding-left: 0;

  &:active {
    color: #fff;
  }
`;

const CustomerLogos = () => {
  return (
    <Container>
      <Haeding>
        <Title1>{text1}</Title1>
        <TextSupporting1>{text2}</TextSupporting1>
        <TransparentButton>
          Become a sponsor
          <ArrowRightBlue />
        </TransparentButton>
      </Haeding>
      <Logos>
        <Row>
          <Card>
            <Stripe />
            <P>Partner since 2015</P>
            <GrayButton>
              <ExternalLink />
              Visit website
            </GrayButton>
          </Card>
          <Card>
            <Spotify />
            <P>Partner since 2015</P>
            <GrayButton>
              <ExternalLink />
              Visit website
            </GrayButton>
          </Card>
          <Card>
            <Tesla />
            <P>Partner since 2015</P>
            <GrayButton>
              <ExternalLink />
              Visit website
            </GrayButton>
          </Card>
          <Card>
            <Twitch />
            <P>Partner since 2015</P>
            <GrayButton>
              <ExternalLink />
              Visit website
            </GrayButton>
          </Card>
        </Row>
        <Row>
          <Card>
            <Intel />
            <P>Partner since 2015</P>
            <GrayButton>
              <ExternalLink />
              Visit website
            </GrayButton>
          </Card>
          <Card>
            <Shell />
            <P>Partner since 2015</P>
            <GrayButton>
              <ExternalLink />
              Visit website
            </GrayButton>
          </Card>
          <Card>
            <Netflix />
            <P>Partner since 2015</P>
            <GrayButton>
              <ExternalLink />
              Visit website
            </GrayButton>
          </Card>
          <Card>
            <Nestle />
            <P>Partner since 2015</P>
            <GrayButton>
              <ExternalLink />
              Visit website
            </GrayButton>
          </Card>
        </Row>
        <Row>
          <Card>
            <FedEx />
            <P>Partner since 2015</P>
            <GrayButton>
              <ExternalLink />
              Visit website
            </GrayButton>
          </Card>
          <Card>
            <Disney />
            <P>Partner since 2015</P>
            <GrayButton>
              <ExternalLink />
              Visit website
            </GrayButton>
          </Card>
          <Card>
            <Bmw />
            <P>Partner since 2015</P>
            <GrayButton>
              <ExternalLink />
              Visit website
            </GrayButton>
          </Card>
          <Card>
            <CocaCola />
            <P>Partner since 2015</P>
            <GrayButton>
              <ExternalLink />
              Visit website
            </GrayButton>
          </Card>
        </Row>
      </Logos>
    </Container>
  );
};
export default CustomerLogos;
