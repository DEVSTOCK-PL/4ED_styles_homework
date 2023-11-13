import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const Card = styled.div`
  flex: 1 0 21%;
  border: 1px solid #ccc;
  background: ${({ theme }) => theme.footerBackground};
  color: ${({ theme }) => theme.title};
  padding: 20px;
  margin: 10px;
  img {
    width: 100%;
    margin-right: 20px;
  }
  div {
    flex-grow: 1;
  }
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Pagination = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom: 5px;
`;

const PageButton = styled.button`
  margin: 5px 5px;
  padding: 5px 15px;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.title};
  ${({ active }) => active && "background: blue;"}
  ${({ disabled }) => disabled && "opacity: 0.5; pointer-events: none;"}
`;

function RickAndMorty() {
  const { page: pageString = "1" } = useParams();
  const page = parseInt(pageString, 10);
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [numPages, setNumPages] = useState(1);

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/?page=${page}`
      );
      setCharacters(response.data.results);
      setNumPages(response.data.info.pages);
    };
    fetchCharacters();
  }, [page]);

  const pageNumbers = Array.from({ length: numPages }, (_, i) => i + 1);

  const goToPage = (pageNum) => {
    navigate(`/list/${pageNum}`);
  };

  return (
    <div>
      <Pagination>
        <PageButton
          disabled={page === 1}
          onClick={() => goToPage(Math.max(1, parseInt(page) - 1))}
        >
          Previous
        </PageButton>
        {pageNumbers.map((pageNum) => (
          <PageButton
            key={pageNum}
            active={pageNum === parseInt(page)}
            onClick={() => goToPage(pageNum)}
          >
            {pageNum}
          </PageButton>
        ))}
        <PageButton
          disabled={page === numPages}
          onClick={() => goToPage(Math.min(numPages, parseInt(page) + 1))}
        >
          Next
        </PageButton>
      </Pagination>
      <CardsContainer>
        {characters.map(
          ({ id, image, name, status, species, type, gender }) => (
            <Card key={id}>
              <img src={image} alt={name} />
              <div>
                <h2>{name}</h2>
                <p>
                  <strong>Status:</strong> {status}
                </p>
                <p>
                  <strong>Species:</strong> {species}
                </p>
                <p>
                  <strong>Type:</strong> {type}
                </p>
                <p>
                  <strong>Gender:</strong> {gender}
                </p>
              </div>
            </Card>
          )
        )}
      </CardsContainer>
    </div>
  );
}

export default RickAndMorty;
