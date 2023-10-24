import styled from "styled-components";
import { useContext } from "react";

import { StyleContext } from "../../App";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
    text-align: center;
  }
  background-color: ${(props) => (props.darkTheme ? "black" : "white")};
  color: ${(props) => (props.darkTheme ? "white" : "black")};
`;

const Title = styled.h1`
  font-size: 36px;
  text-align: center;
`;

const About = () => {
  const darkTheme = useContext(StyleContext);

  return (
    <Wrapper darkTheme={darkTheme}>
      <Title>About</Title>

      {darkTheme ? <h1>Tryb Ciemny</h1> : <h1>Tryb Jasny</h1>}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quia
        fugiat repellendus maxime soluta iusto quod distinctio possimus
        asperiores voluptas. Veniam nulla ad perferendis explicabo magnam unde
        aperiam labore in incidunt exercitationem, ex quo libero amet,
        distinctio quia, odit suscipit harum delectus. Quasi ipsam hic
        doloremque officiis eos non animi!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quia
        fugiat repellendus maxime soluta iusto quod distinctio possimus
        asperiores voluptas. Veniam nulla ad perferendis explicabo magnam unde
        aperiam labore in incidunt exercitationem, ex quo libero amet,
        distinctio quia, odit suscipit harum delectus. Quasi ipsam hic
        doloremque officiis eos non animi! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Voluptates adipisci blanditiis praesentium
        debitis cumque libero fuga ullam animi sint eligendi.
      </p>
    </Wrapper>
  );
};
export default About;
