import styled from "styled-components";

const Card = styled.div`
  width: 200px;
  height: 280px;
  padding: 10px;
  background-color: #666;
  border-radius: 8px;
`;

const Name = styled.p`
  color: black;
  font-size: 18px;
`;

const Img = styled.img`
  max-width: 180px;
`;

const CardCharacters = ({ item }) => {
  const { name, image } = item;

  return (
    <Card>
      <Name>{name}</Name>
      <Img src={image} alt={name} />
    </Card>
  );
};
export default CardCharacters;
