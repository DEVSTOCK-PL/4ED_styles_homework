import styled from "styled-components";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";

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

const Articles = () => {
  const [article, setArticle] = useState(1);
  let { id } = useParams();
  const navigate = useNavigate();

  const handleNext = (count) => {
    setArticle(count + 1);
    navigate(`/articles/${article}`);
  };

  return (
    <Wrapper>
      <Title>Lista Artykułów</Title>
      {id !== undefined ? (
        <>
          <Title>Artykuł nr {id}</Title>
          <button onClick={() => handleNext(article)}>następny artykuł</button>
        </>
      ) : (
        <Link to="/articles/1">
          <CustomNav> Przejdź do pierwszego artykułu</CustomNav>
        </Link>
      )}
    </Wrapper>
  );
};

export default Articles;
