import styled from "styled-components";
import externalLink from "../images/externalLink.svg";


const SponsorCard = styled.div`
  padding-bottom: 35px;

  :nth-child(2) {
    color: #6b7280;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    padding: 10px 0px;
  }

  button {
    display: flex;
    justify-content: center;
    background-color: #1F2A37;
    width: 122px;
    height: 34px;
    padding: 8px 12px;
    border-radius: 8px;
    border: 1px solid #4B5563;
    color: #9ca3af;
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    img{
      margin-right: 8px;
    }
  }
`;

const LogoImg = styled.img`
  height: 78px;
  width: 142px;
`


function SponsorsCards({ img }) {
  return (
    <SponsorCard>
      <LogoImg src={img} alt="stripe-logo" />
      <div>Partner since 2015</div>
      <button>
        {" "}
        <img src={externalLink} alt="externalLink" />
        Visit website
      </button>
    </SponsorCard>
  );
}

export default SponsorsCards;
