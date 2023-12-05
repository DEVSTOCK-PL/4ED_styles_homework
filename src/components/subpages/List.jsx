// return (
//   <div>
//     <h1>Rick & Morty</h1>

//     {loading ? (
//       <div>loading</div>
//     ) : (
//       data.map(({ name, gender, image }) => {
//         return <div key={name}>
//           <h1>{name}</h1>
//           <div>{gender}</div>
//           <img src={image} alt="image" />
//         </div>;
//       })
//     )}
//   </div>
// );
// };
import { useEffect, useState } from "react";

import { Link, useLocation } from "react-router-dom";

import styled from "styled-components";

import useLogic from "../hooks/useLogic";

import Card from "../Card";

const Wrapper = styled.div`
  display: flex;
  /* flex-direction: column; */
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
const Nav = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 20px;
  li {
    padding: 10px;
    background-color: #999;
  }
`;

const List = () => {
  const { pathname } = useLocation(); // pathname czyli url z hook uselocation

  const category = pathname.split("/")[2];

  const { data, loading } = useLogic(category);

  const [users, setUsers] = useState(null);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch("http://localhost:3000/users");
        if (!response.ok) {
          throw new Error("błąd podczas pobierania danych");
        }
        const users = await response.json();
        console.log("użytkownicy", users);
        setUsers(users);
      } catch (error) {
        console.log("błąd podczas pobierania danych", error);
      }
    }
    fetchUsers();
  }, []);

  return (
    <div>
      {users && JSON.stringify(users)}

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
