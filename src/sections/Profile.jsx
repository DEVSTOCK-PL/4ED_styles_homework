import styled from "styled-components";
import { useContext } from "react";
import { AppContext } from "../hooks/AppContext";

import useProfileLogic from "../hooks/useProfileLogic";

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

const BooksBox = styled.div`
  display: flex;
`;

const Card = styled.div`
  background-color: #232323;
  width: 200px;
  height: 300px;
  border: 3px solid #ec741e;
  border-radius: 8px;
  margin-right: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  font-size: 12px;
  justify-content: space-between;
`;

const Author = styled.div`
  color: green;
  font-size: 14px;
`;
const Title = styled.div`
  color: #de1c12;
  font-weight: 600;
`;
const Description = styled.div`
  color: #555;
  font-weight: 600;
`;
const Img = styled.img`
  background-color: orange;
  border: 3px solid #5e0606;
  border-radius: 6px;
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: 500px;
`;

const Profile = () => {
  const { login } = useContext(AppContext);
  const { data: booksData } = useProfileLogic();
  console.log("booksData.data:", booksData.data);
  const storedUserData = JSON.parse(localStorage.getItem("userToLogin"));
  if (storedUserData) {
    console.log("storedUserData.email:", storedUserData.email);
  }
  const text1 = `Witaj User! Jesteś aktualnie zalogowany jako ${storedUserData?.name} ${storedUserData?.secondName}, a Twój email to: ${storedUserData?.email}`;

  return (
    <Container>
      <Content>
        <Heading>
          <Title1>{login ? text1 : "Zostałeś wylogowany"}</Title1>
        </Heading>
        {login && (
          <Body>
            <Title1>Lista e-booków w Twojej biblioteczce!</Title1>
            <BooksBox>
              {booksData?.data &&
                booksData.data.map((book, _) => (
                  <Card key={book.id}>
                    <Author>{book.author}</Author>
                    <Title>{book.title}</Title>
                    <Img src={book.image} ale={book.title} />
                    <Description>{book.description}</Description>
                  </Card>
                ))}
            </BooksBox>
          </Body>
        )}
      </Content>
    </Container>
  );
};
export default Profile;
