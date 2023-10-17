import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 36px;
  text-align: center;
`;

const CustomNav = styled(Title)`
  border: 1px solid red;
  padding: 10px;
`;

const NotFound = () => (
  <Wrapper>
    <Title>404</Title>
    <Title>Taka strona nie istnieje</Title>
    <Link to={`/`}>
      <CustomNav>Wracamy do brzegu</CustomNav>
    </Link>
  </Wrapper>
);
export default NotFound;
