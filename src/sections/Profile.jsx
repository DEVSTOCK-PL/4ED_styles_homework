import styled from "styled-components";
import { useContext } from "react";
import { AppContext } from "../hooks/AppContext";

// import useProfileLogic from "../hooks/useProfileLogic";

const text1 = "BOOK     BOOK      BOOK     zawartość profilu";

const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  min-height: 855px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 1025px) and (max-width: 1280px) {
    max-width: 1280px;
    height: 855px;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    max-width: 1024px;
    height: auto;
    padding-top: 60px;
    padding-bottom: 60px;
  }
  @media (min-width: 641px) and (max-width: 768px) {
    max-width: 768px;
    height: auto;
    padding-top: 60px;
    padding-bottom: 60px;
  }
  @media (max-width: 640px) {
    max-width: 640px;
    height: auto;
    padding-top: 60px;
    padding-bottom: 60px;
  }
`;

const Content = styled.div`
  width: 89%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 641px) and (max-width: 768px) {
    width: 443px;
    height: auto;
  }
  @media (max-width: 640px) {
    width: 343px;
    height: auto;
  }
`;

const Heading = styled.div`
  width: 53%;
  height: auto;
  gap: 16px;
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;

  @media (min-width: 641px) and (max-width: 768px) {
    width: 343px;
    height: auto;
    padding-bottom: 20px;
  }
  @media (max-width: 640px) {
    width: 343px;
    height: auto;
    padding-bottom: 20px;
  }
`;

const Title1 = styled.p`
  width: 100%;
  height: auto;
  font-size: 36px;
  line-height: 45px;
  font-weight: 800;
  margin: 0;

  @media (min-width: 641px) and (max-width: 768px) {
    font-size: 30px;
    line-height: 45px;
  }
  @media (max-width: 640px) {
    font-size: 30px;
    line-height: 45px;
    min-width: 350px;
  }
`;

const Profile = () => {
  const { login } = useContext(AppContext);
  return (
    <Container>
      <Content>
        <Heading>
          <Title1>{login ? text1 : "Zostałeś wylogowany"}</Title1>
        </Heading>
      </Content>
    </Container>
  );
};
export default Profile;
