import styled from "styled-components";
import UserList from "../components/UserList/UserList";

const Info = styled.div`
  background: ${({ theme }) => theme.background_1};
  color: ${({ theme }) => theme.text};
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 63px;
  padding: 96px 16px;
`;

const Admin = () => {
  return (
    <>
      <Info>Admin Dashboard</Info>
      <UserList />
    </>
  );
};

export default Admin;
