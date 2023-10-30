import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
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
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabledPrevButton, setIsDisabledPrevButton] = useState(false);
  const [isDisabledNextButton, setIsDisabledNextButton] = useState(false);

  const { id } = useParams();
  const actualId = id || 1;
  const navigate = useNavigate();

  const prevPage = () => {
    setIsDisabledNextButton(false);
    const newId = parseInt(actualId) - 1;
    if (newId <= 1) {
      setIsDisabledPrevButton(true);
    } else {
      setIsDisabledPrevButton(false);
    }
    fetchData(newId);
    navigate(`/list/${newId}`);
  };

  const nextPage = () => {
    setIsDisabledPrevButton(false);
    const newId = parseInt(actualId) + 1;
    const lastPage = data.info.pages;
    if (newId >= lastPage) {
      setIsDisabledNextButton(true);
    } else {
      setIsDisabledNextButton(false);
    }
    fetchData(newId);
    navigate(`/list/${newId}`);
  };

  const fetchData = async (page) => {
    try {
      setIsLoading(true);
      const res = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`,
      );
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (actualId <= 1) {
      setIsDisabledPrevButton(true);
    }
    fetchData(actualId);
  }, [actualId]);

  return (
    <Wrapper>
      <h1>Rick&Morty</h1>
      <Div>
        <button disabled={isDisabledPrevButton} onClick={prevPage}>
          prev
        </button>
        <button disabled={isDisabledNextButton} onClick={nextPage}>
          next
        </button>
      </Div>
      <Div>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          data?.results.map(({ id, image, name }) => (
            <div key={id}>
              <img src={image} alt="image" />
              <p>{name}</p>
            </div>
          ))
        )}
      </Div>
      <Link to="/">Wróć do strony głównej</Link>
    </Wrapper>
  );
}

export default RickAndMorty;
