import styled from "styled-components";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  height: 400px;
  padding: 20px;
  background-color: #ddd;
  img {
    max-width: 200px;
  }
`;

const Card = ({ item, category }) => {
  const { name, image, episode, air_date, created, dimension, type } = item;

  return (
    <Box>
      <div>{name}</div>
      {category === "characters" && (
        <div>
          <img src={image} alt={name} />
        </div>
      )}
      {category === "episodes" && (
        <div>
          <div>{created}</div>
          <div>{episode}</div>
          <div>{air_date}</div>
        </div>
      )}
      {category === "locations" && (
        <div>
          <div>{created}</div>
          <div>{dimension}</div>
          <div>{type}</div>
        </div>
      )}
    </Box>
  );
};

export default Card;
