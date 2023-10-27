import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  height: 600px;
  /* background-color: #111928; */
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 1025px) and (max-width: 1280px) {
    max-width: 1280px;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    max-width: 1024px;
  }
  @media (min-width: 641px) and (max-width: 768px) {
    max-width: 768px;
  }
  @media (max-width: 640px) {
    max-width: 640px;
  }
`;

const InfoError = styled.div`
  width: 400px;
  height: auto;
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
