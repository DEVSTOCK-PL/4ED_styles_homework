import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

import useLogic from "../hooks/useLogic";

import Card from "../Card";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const Nav = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin: 20px;
  li {
    padding: 10px;
    background-color: #999;
  }
`;

const List = () => {
  const { pathname } = useLocation();
  const category = pathname.split("/")[2];
  const { data, loading } = useLogic(category);
  console.log(data);

  //---
  const [users, setUsers] = useState(null);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch("http://localhost:3000/users");
        if (!response.ok) {
          throw new Error("Błąd podczas pobierania danych");
        }
        const users = await response.json();
        console.log("Użytkownicy:", users);
        setUsers(users);
      } catch (error) {
        console.error("Błąd podczas pobierania danych:", error);
      }
    }
    fetchUsers();
  }, []);

  return (
    <div>
      {users && JSON.stringify(users)}

      {/* --- */}
      <h1>Rick & Morty</h1>
      <Nav>
        <li>
          <Link to="/list/characters">Lista postaci</Link>
        </li>
        <li>
          <Link to="/list/locations">Lista lokacji</Link>
        </li>
        <li>
          <Link to="/list/episodes">Lista odcinków</Link>
        </li>
      </Nav>
      {loading ? (
        <div>loading</div>
      ) : (
        <Wrapper>
          {data.map(({ id, ...rest }) => {
            return <Card key={id} item={rest} category={category} />;
          })}
        </Wrapper>
      )}
    </div>
  );
};
export default List;
