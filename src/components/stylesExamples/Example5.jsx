import { USERS } from "../../database/users";

import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  height: auto;
  padding: 20px;
  background-color: #95ab6e;
  border-radius: 20px;
`;
const Card = styled.div`
  display: flex;
  justify-content: space-between;
  color: #000;
  width: 280px;
  height: 160px;
  margin: 10px;
  padding: 10px;
  background-color: #935c5c;
  border-radius: 20px;
`;

const CardData = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const BlackCardData = styled(CardData)`
  background-color: #000;
  color: #fff;
`;

const Fav = styled.div`
  color: #fff;
  width: 70px;
  height: 40px;
  padding: 10px;
  background-color: #473253;
  margin: 10px;
`;

const Example5 = () => {
  return (
    <>
      <h1>styled components</h1>
      {USERS.map(
        ({ id, firstName, lastName, favoriteColor, favoriteItems }) => (
          <Wrapper key={id}>
            <Card>
              <CardData>
                <div>Imię: {firstName}</div>
                <div>Nazwisko: {lastName}</div>
                <div>Ulubiony kolor:{favoriteColor}</div>
              </CardData>
              <BlackCardData>
                <div>Imię: {firstName}</div>
                <div>Nazwisko: {lastName}</div>
                <div>Ulubiony kolor:{favoriteColor}</div>
              </BlackCardData>
              <div>
                {favoriteItems.map((item) => {
                  return <Fav key={item}>{item}</Fav>;
                })}
              </div>
            </Card>
          </Wrapper>
        )
      )}
    </>
  );
};

export default Example5;
