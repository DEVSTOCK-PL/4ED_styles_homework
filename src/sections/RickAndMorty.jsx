import { useParams } from "react-router-dom";
import { useState } from "react";
import useFetchLogic from "../hooks/useFetchLogic";
import styled from "styled-components";
import { ArrowLeftYellow, ArrowRightYellow } from "../assets/svg_components";
import CardCharacters from "../components/CardCharacters";

const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  height: auto;
  min-height: 800px;
  background-color: #111928;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 20px;
`;

const Buttons = styled.div`
  width: 400px;
  height: 60px;
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 40px;
`;

const List = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

const Button = styled.button`
  width: 150px;
  height: 30px;
  color: #eee;
  font-weight: 600;
  background-color: #1a56db;
  border: 1px solid #ebba18;
  border-radius: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  &:active {
    border: 1px solid #1a56db;
    color: #ebba18;
  }
`;

const RickAndMorty = () => {
  const { page } = useParams();
  const initialPage = parseInt(page || 1);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const { datas, loading, pagess } = useFetchLogic(currentPage);

  console.log("Current Page", currentPage);

  const handleCurrentPage = (newPage) => {
    if (newPage >= 1 && newPage <= pagess) {
      setCurrentPage(newPage);
    }
  };

  return (
    <Container>
      <Buttons>
        <Button onClick={() => handleCurrentPage(currentPage - 1)}>
          <ArrowLeftYellow />
          prev Side
        </Button>
        <Button onClick={() => handleCurrentPage(currentPage + 1)}>
          next Side
          <ArrowRightYellow />
        </Button>
      </Buttons>
      {loading ? (
        <div>LOADING</div>
      ) : (
        <List>
          {datas.map(({ id, ...rest }) => {
            return <CardCharacters key={id} item={rest} />;
          })}
        </List>
      )}
    </Container>
  );
};
export default RickAndMorty;
