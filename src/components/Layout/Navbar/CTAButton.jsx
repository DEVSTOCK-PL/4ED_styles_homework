import { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "../../Reusable/Button";

const CTAButton = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: 1000px) {
    flex-direction: column;
  }

  & span {
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;

    @media (max-width: 1000px) {
      display: none;
    }
  }
`;

function CTAButtonComponent({ loginText, buttonProps }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const buttonText = windowWidth <= 1000 ? "Log In" : loginText;
  const buttonVersion = windowWidth <= 1000 ? "transparent" : buttonProps;

  return (
    <CTAButton>
      <span>Log In</span>
      <Button version={buttonVersion}>{buttonText}</Button>
    </CTAButton>
  );
}

export default CTAButtonComponent;
