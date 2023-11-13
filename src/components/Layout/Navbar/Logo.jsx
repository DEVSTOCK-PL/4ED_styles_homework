import styled from "styled-components";

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  & img {
    width: 32px;
    height: 32px;
  }

  & span {
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
  }
`;

function LogoComponent({ logoSvg, logoText }) {
  return (
    <Logo>
      <img src={logoSvg} alt={logoText} />
      <span>{logoText}</span>
    </Logo>
  );
}

export default LogoComponent;
