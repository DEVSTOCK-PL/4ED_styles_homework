import styled from "styled-components";

const Container = styled.div`
  width: 1440px;
  height: 600px;
  background-color: #111928;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 640px) {
    width: 375px;
    height: auto;
    align-items: center;
  }
  @media (min-width: 641px) and (max-width: 768px) {
    width: 675px;
    height: auto;
    align-items: center;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    width: 980px;
    height: auto;
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    width: 1220px;
    height: auto;
    padding-top: 30px;
    padding-bottom: 30px;
  }
`;
const InfoError = styled.div`
  width: 400px;
  height: 200px;
  text-align: center;
`;

const NotFound = () => {
  return (
    <Container>
      <InfoError>
        <h1>Not Found</h1>
        <h3>Użyj nawigacji albo wpisz poprawny adres url</h3>
      </InfoError>
    </Container>
  );
};
export default NotFound;
