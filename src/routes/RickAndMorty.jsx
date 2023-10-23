import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
`;

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

function RickAndMorty() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://rickandmortyapi.com/api/character');
        const data = await res.json();
        console.log(data.results);
        setData(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [data]);
  console.log(data);

  return (
    <Wrapper>
      <h1>Rick&Morty</h1>
      <Div>
        {data?.map(({ id, image, name }) => (
          <div key={id}>
            <img src={image} alt="image" />
            <p>{name}</p>
          </div>
        ))}
      </Div>
      <Link to="/">Wróć do strony głównej</Link>
    </Wrapper>
  );
}

export default RickAndMorty;
