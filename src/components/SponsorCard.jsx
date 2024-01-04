// import styled from "styled-components";

// import { useContext } from "react";
// import { StyleContext } from "../App";

// import { colors } from "./colors";

// import { externalLink } from "../images";

// const Card = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding-bottom: 35px;

//   :nth-child(2) {
//     color: #6b7280;
//     font-size: 16px;
//     font-weight: 400;
//     line-height: 20px;
//     padding: 10px 0px;
//   }

//   button {
//     display: flex;
//     justify-content: center;
//     background-color: ${(props) => props.darkTheme ? "#1f2a37" : colors.LightBackgroundColorTwo};
//     width: 124px;
//     height: 34px;
//     padding: 8px 12px;
//     border-radius: 8px;
//     border: 1px solid #4b5563;
//     color: #9ca3af;
//     font-size: 12px;
//     font-weight: 500;
//     line-height: 18px;
//     img {
//       margin-right: 8px;
//     }
//   }
// `;

// const LogoImg = styled.img`
//   height: 53px;
//   width: 100px;
// `;

// // eslint-disable-next-line react/prop-types
// function SponsorCard({ img }) {

//   const darkTheme = useContext(StyleContext);

//   return (
//     <Card darkTheme = {darkTheme}>
//       <LogoImg src={img} alt="stripe-logo" />
//       <div>Partner since 2015</div>
//       <button>
//         <img src={externalLink} alt="externalLink" />
//         Visit website
//       </button>
//     </Card>
//   );
// }

// export default SponsorCard;

import styled from "styled-components";
import { useContext } from "react";

import { StyleContext } from "../App";
import { externalLink } from "../images";

import { colors } from "./colors";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 35px;

  :nth-child(1) {
    color: #6b7280;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    margin-bottom: 10px;
  }

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
    align-items: center;
    background-color: ${(props) =>
      props.darkTheme ? "#1f2a37" : colors.LightBackgroundColorTwo};
    width: 124px;
    height: 34px;
    padding: 8px 12px;
    border-radius: 8px;
    border: 1px solid #4b5563;
    color: #9ca3af;
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    img {
      margin-right: 8px;
      margin-top: 10px;
    }
  }
`;

// eslint-disable-next-line react/prop-types
function SponsorCard() {
  const darkTheme = useContext(StyleContext);

  return (
    <Card darkTheme={darkTheme}>
      <div>Partner since 2015</div>
      <button>
        <img src={externalLink} alt="externalLink" />
        Visit website
      </button>
    </Card>
  );
}

export default SponsorCard;
