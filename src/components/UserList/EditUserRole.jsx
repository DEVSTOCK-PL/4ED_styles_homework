import { Button, Radio, Modal } from "../UI";
import { EditUserIcon } from "../../assets";
import { useState } from "react";
import styled from "styled-components";
import useAPIQuery from "../../hooks/useAPIQuery";
import { useSnackbar } from "notistack";

const EditUserContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  width: 100%;
`;

const Heading = styled.div`
  width: 100%;
  border-bottom: 1px solid #9ca3af;
  h1 {
    font-size: 24px;
    padding: 20px 140px 20px 20px;
  }
`;
const EditUserRolesContent = styled.div`
  padding: 20px;
  li {
    display: flex;
    align-items: center;
    font-size: 20px;
    display: flex;
    list-style: none;
    gap: 10px;
    padding: 5px 0;
  }
`;

const ActionBtns = styled.div`
  width: 100%;
  padding: 20px;
  border-top: 1px solid #9ca3af;
  display: flex;
  justify-content: end;
  gap: 20px;
`;

const UserNameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  gap: 20px;
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
`;
const UserDetails = styled.div`
  font-size: 20px;
  line-height: 150%;
  p:nth-child(2) {
    color: ${({ theme }) => theme.text_2};
  }
`;
const userRoles = [
  { id: 1, role: "Admin" },
  { id: 2, role: "User" },
];

const EditUserRole = ({ id, role }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const [userRole, setUserRole] = useState(role);
  const { runQuery, queryClient } = useAPIQuery();

  const handleCheckedItem = (newRole) => {
    setUserRole(newRole);
  };

  const closeModal = () => {
    setUserRole(role);
    setIsModalOpen(false);
  };

  const handleSaveEdit = () => {
    runQuery.patch(
      `/users/${id}`,
      { role: userRole },
      {
        onSuccess: () => {
          enqueueSnackbar("You have successfully edited the user!", { variant: "success" });
          queryClient.invalidateQueries({ queryKey: ["/users"] }); //add as method to runQuery function
        },
        onError: () => {
          enqueueSnackbar("There war an error, try again!", { variant: "error" });
        },
      }
    );
    setIsModalOpen(false);
  };
  return (
    <>
      <Button variant="primary" onClick={() => setIsModalOpen(true)}>
        <EditUserIcon />
        Edit user's role
      </Button>
      {isModalOpen && (
        <Modal close={closeModal}>
          <EditUserContent>
            <Heading>
              <h1>Assigned roles</h1>
            </Heading>
            <EditUserRolesContent>
              <UserNameContainer>
                <img src="https://flowbite.com/application-ui/demo/images/users/roberta-casas.png" />
                <UserDetails>
                  <p>Pawel Swietek</p>
                  <p>thrall84s3@gmail.com</p>
                </UserDetails>
              </UserNameContainer>
              <ul>
                {userRoles.map((item) => (
                  <li key={item.id}>
                    <Radio key={item.id} role={item.role} active={userRole} handleCheckedItem={handleCheckedItem} />
                    {item.role}
                  </li>
                ))}
              </ul>
            </EditUserRolesContent>
            <ActionBtns>
              <Button onClick={handleSaveEdit}>Save all</Button>
              <Button variant="alternative" onClick={closeModal}>
                Cancel
              </Button>
            </ActionBtns>
          </EditUserContent>
        </Modal>
      )}
    </>
  );
};

export default EditUserRole;
