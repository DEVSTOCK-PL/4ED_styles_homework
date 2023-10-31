import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "./styleElements/Button";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
`
const Title = styled.h1`
  font-size: 76px;
  width: 800;
  color: #bac3c4;
`;

function NotFound() {
  return (
    <Container>
      <Title>404</Title>
      <h1>Oops! There was an error.</h1>
      <Link to="/Home2">
        <Button>Go to Home Page</Button>
      </Link>
    </Container>
  );
}

export default NotFound;
