import { useContext } from "react";
import styled from "styled-components";
import { AuthContext } from "../../context/AuthContext";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
    text-align: center;
  }
`;
const Button = styled.button`
  font-size: 24px;
  padding: 15px;
  margin: 10px;
  background-color: cadetblue;
  color: black;
  transition: 0.3s;
`;

const Title = styled.h1`
  font-size: 36px;
  text-align: center;
`;

const Home = () => {
  const { user, login, logout } = useContext(AuthContext);
  console.log(user);

  return (
    <Wrapper>
      <Title>User page</Title>
      {user ? (
        <Button onClick={logout}>Logout</Button>
      ) : (
        <Button onClick={() => login({ name: "John Doe" })}>Login</Button>
      )}
      {user && <h1>{user?.name}</h1>}
    </Wrapper>
  );
};
export default Home;
