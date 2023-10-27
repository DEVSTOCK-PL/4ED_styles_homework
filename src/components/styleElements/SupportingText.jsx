import styled from "styled-components";
import BreakPoints from "../BreakPoints";

const SupportingText = styled.div`
  color: #9ca3af;
  padding: 20px 0px 20px 0px;
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0em;
  /* text-align: left; */
  @media (max-width: ${BreakPoints.smallDesktop}) {
    font-size: 15px;
    font-weight: 400;
  }
`;

export default SupportingText;
