import styled from "styled-components";
import BreakPoints from "../BreakPoints";

const Heading = styled.div`
  font-size: 36px;
  font-weight: 800;
  line-height: 45px;
  letter-spacing: -0.01em;
  text-align: left;
  @media (max-width: ${BreakPoints.smallDesktop}) {
    font-size: 31px;
    font-weight: 600;
  }
`;

export default Heading;
