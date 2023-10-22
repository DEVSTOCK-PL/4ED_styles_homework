import styled from "styled-components";
import Button from "../../Reusable/Button";

const CTAButton = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  & span {
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
  }
`;

function CTAButtonComponent({ loginText, buttonProps }) {
  return (
    <CTAButton>
      <span>Log In</span>
      <Button version={buttonProps}>{loginText}</Button>
    </CTAButton>
  );
}

export default CTAButtonComponent;
