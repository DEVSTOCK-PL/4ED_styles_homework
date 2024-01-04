import styled from "styled-components";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  height: 300px;
  padding: 20px;
  background-color: #ddd;
  color: black;
  img {
    max-width: 200px;
  }
`;

// eslint-disable-next-line react/prop-types
const Card = ({ item, category }) => {
  // eslint-disable-next-line react/prop-types
  const { name, image, episode, air_date, created, dimension, type } = item;

  return (
    <Box>
      <div>{name}</div>
      {category === "characters" && (
        <div>
          <img src={image} alt={name} />
        </div>
      )}
      {category === "locations" && (
        <div>
          <div>{created}</div>
          <div>{dimension}</div>
          <div>{type}</div>
        </div>
      )}
      {category === "episodes" && (
        <div>
          <div>{created}</div>
          <div>{episode}</div>
          <div>{air_date}</div>
        </div>
      )}
    </Box>
  );
};

export default Card;
