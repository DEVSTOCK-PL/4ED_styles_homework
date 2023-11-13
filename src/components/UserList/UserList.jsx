import styled from "styled-components";
import { Button, CheckBox } from "../UI";
import DeleteUser from "./DeleteUser";
import { DeleteUserIcon } from "../../assets";
import EditUserRole from "./EditUserRole";
import useAPIQuery from "../../hooks/useAPIQuery";

const UserListWrapper = styled.section`
  width: 100%;
  padding: 64px 0;
  background-color: ${({ theme }) => theme.background_1};
  display: flex;
  justify-content: center;
`;
const UserTable = styled.table`
  max-width: 1280px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.borderColor};
  thead {
    background-color: ${({ theme }) => theme.background_3};
    tr {
      th:nth-child(1) {
        width: 48px;
      }
      th {
        color: #9ca3af;
        padding: 18px 15px;
        font-size: 12px;
        font-weight: 600;
        line-height: 150%;
        text-transform: uppercase;
        width: auto;
        text-align: left;
      }
    }
  }
  tbody {
    tr {
      background-color: ${({ theme }) => theme.background_2};
      border-bottom: 1px solid ${({ theme }) => theme.borderColor};

      td {
        color: ${({ theme }) => theme.text};
        padding: 18px 15px;
        font-size: 14px;
        font-weight: 500;
        line-height: 150%;
        text-align: left;
      }
    }
  }
`;

const UserNameContainer = styled.div`
  display: flex;
  gap: 20px;
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;
const UserDetails = styled.div`
  p:nth-child(2) {
    color: ${({ theme }) => theme.text_2};
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const usersImages = [];

const UserList = () => {
  const { runQuery } = useAPIQuery();

  const { data: users } = runQuery.get("/users");
  return (
    <UserListWrapper>
      <UserTable>
        <thead>
          <tr>
            <th>
              <CheckBox />
            </th>
            <th>user</th>

            <th>role</th>
            <th>
              <ButtonWrapper>
                actions
                <Button variant="delete">
                  <DeleteUserIcon />
                  Delete selected users
                </Button>
              </ButtonWrapper>
            </th>
          </tr>
        </thead>
        <tbody>
          {users?.map(({ id, name, secondName, role, email }) => (
            <tr key={id}>
              <td>
                <CheckBox />
              </td>
              <td>
                <UserNameContainer>
                  <img src="https://flowbite.com/application-ui/demo/images/users/roberta-casas.png" />
                  <UserDetails>
                    <p>{name + " " + secondName}</p>
                    <p>{email}</p>
                  </UserDetails>
                </UserNameContainer>
              </td>
              <td>{role}</td>
              <td>
                <ButtonWrapper>
                  <EditUserRole id={id} role={role} />
                  <DeleteUser id={id} />
                </ButtonWrapper>
              </td>
            </tr>
          ))}
        </tbody>
      </UserTable>
    </UserListWrapper>
  );
};

export default UserList;
