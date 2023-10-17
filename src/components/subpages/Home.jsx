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

const Home = () => {

  return (
    <Wrapper>
      <Title>Home Page</Title>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quia
        fugiat repellendus maxime soluta iusto quod distinctio possimus
        asperiores voluptas. Veniam nulla ad perferendis explicabo magnam unde
        aperiam labore in incidunt exercitationem, ex quo libero amet,
        distinctio quia, odit suscipit harum delectus. Quasi ipsam hic
        doloremque officiis eos non animi!
      </p>
      <Title>Skontaktuj się z nami</Title>
      <Link to="/about">
        <CustomNav>Klikając tutaj!</CustomNav>
      </Link>
    </Wrapper>
  );
};
export default Home;
