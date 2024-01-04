import styled from "styled-components";
import littleArow from "../images/littleArow.png";

const CenteredLink = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 25px;
  margin-bottom: 60px;
  a {
    color: #3f83f8;
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    text-decoration: none;
  }
  img {
    padding-left: 7px;
    position: relative;
    top: 10px;
    width: 15px;
    height: 11.67px;
  }
`;
function TestLink({ text }) {
  return (
    <CenteredLink>
      <a href="url">{text}</a>
      <img src={littleArow} alt="littleArow-img" />
    </CenteredLink>
  );
}

export default TestLink;
