import styled from "styled-components";

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

const Contact = () => (
  <Wrapper>
    <Title>Contact Page</Title>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quia
      fugiat repellendus maxime soluta iusto quod distinctio possimus asperiores
      voluptas. Veniam nulla ad perferendis explicabo magnam unde aperiam labore
      in incidunt exercitationem, ex quo libero amet, distinctio quia, odit
      suscipit harum delectus.
    </p>
    <Title>e-mail: something@gmail.com</Title>
    <Title>mobile: +48 22 777 77 77</Title>
  </Wrapper>
);
export default Contact;
