import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../Reusable/Button";
import { UserContext } from "../../hooks/UserContext";

const CTAButton = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: 1000px) {
    flex-direction: column;
  }

  & div {
    display: flex;
    align-items: center;
    gap: 16px;
    @media (max-width: 1200px) {
      padding-left: 20px;
    }
  }

  & p {
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;

    @media (max-width: 1200px) {
      display: none;
    }
  }
`;

function CTAButtonComponent({ loginText, buttonProps }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { user, logout } = useContext(UserContext);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navigate = useNavigate();
  const handleButtonClick = () => {
    if (user) {
      logout();
    } else {
      navigate("/register");
    }
  };
  const buttonText = windowWidth <= 1000 ? "Log In" : loginText;
  const buttonVersion = windowWidth <= 1000 ? "transparent" : buttonProps;

  return (
    <CTAButton>
      {user ? (
        <div>
          <p>{user.name}!</p>
          <Button version={buttonVersion} onClick={handleButtonClick}>
            Wyloguj
          </Button>
        </div>
      ) : (
        <div>
          <Button version={"soloText"} onClick={() => navigate("/login")}>
            Log In
          </Button>
          <Button version={buttonVersion} onClick={() => navigate("/register")}>
            {buttonText}
          </Button>
        </div>
      )}
    </CTAButton>
  );
}
export default CTAButtonComponent;
