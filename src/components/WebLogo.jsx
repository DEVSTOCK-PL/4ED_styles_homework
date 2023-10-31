import styled from "styled-components";
import logo from "../images/logo.png";

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: 600;
  line-height: 36px;
  padding-right: 20px;
  img {
    padding-right: 10px;
    width: 25.92px;
    height: 26.67px;
  }
`;

function WebLogo() {
  return (
    <Logo>
      <div>
        <img src={logo} alt="Logo" />
      </div>
      <div>Logo</div>
    </Logo>
  );
}
export default WebLogo
