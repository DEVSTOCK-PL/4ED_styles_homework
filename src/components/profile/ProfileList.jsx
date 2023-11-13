import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import styled from 'styled-components';

import { LoginUserContext } from '../../hooks/useLoginUserContext';

const URL = 'http://localhost:3000/books';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const Div = styled(Wrapper)`
  width: 25vw;
  margin: 20px;
  flex-direction: column;
  text-align: center;
`;

const H2 = styled.h2`
  margin: 10px 0;
`;

const H3 = styled.h3`
  margin-top: 10px;
`;

const fetchData = async (path) => {
  const response = await axios.get(path);
  return response;
};

export function ProfileList() {
  const { user } = useContext(LoginUserContext);

  const { data, isPending, error } = useQuery({
    queryKey: ['books'],
    queryFn: () => fetchData(URL),
  });

  return (
    <Wrapper>
      {user?.isLogin ? (
        isPending ? (
          <h1>Trwa ładowanie...</h1>
        ) : data ? (
          data.data?.map(({ id, title, description, author, image }) => (
            <Div key={id}>
              <img src={image} alt="bookImage" />
              <H2>{title}</H2>
              <p>{description}</p>
              <H3>{author}</H3>
            </Div>
          ))
        ) : error ? (
          <h1>{error.message}</h1>
        ) : (
          <h1>Coś poszło nie tak</h1>
        )
      ) : (
        <h1>Zostałeś wylogowany</h1>
      )}
    </Wrapper>
  );
}
