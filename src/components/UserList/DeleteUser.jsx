import { useState } from "react";
import { Button, Modal } from "../UI";
import { DeleteUserIcon, WarningIcon } from "../../assets";
import styled from "styled-components";
import useAPIQuery from "../../hooks/useAPIQuery";
import { useSnackbar } from "notistack";

const YesNoContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  max-width: 400px;
  width: 100%;
  padding: 20px;

  p {
    font-size: 24px;
    line-height: 150%;
    text-align: center;
  }
  div:nth-of-type(1) {
    height: 120px;
    width: 120px;
  }
  div:nth-of-type(2) {
    width: 100%;
    display: flex;
    gap: 20px;
    justify-content: center;
  }
`;

const DeleteUser = ({ id }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const { runQuery, queryClient } = useAPIQuery();

  const handleDeleteUser = () => {
    runQuery.delete("/users", id, {
      onSuccess: () => {
        enqueueSnackbar("You have successfully deleted the user!", { variant: "success" });
        queryClient.invalidateQueries({ queryKey: ["/users"] }); //add as method to runQuery function
      },
      onError: () => {
        enqueueSnackbar("There war an error, try again!", { variant: "error" });
      },
    });
    setIsModalOpen(false);
  };

  return (
    <>
      <Button variant="delete" onClick={() => setIsModalOpen(true)}>
        <DeleteUserIcon />
        Delete user
      </Button>
      {isModalOpen && (
        <Modal close={() => setIsModalOpen(false)}>
          <YesNoContent>
            <div>
              <WarningIcon />
            </div>
            <p>Are you sure you want to delete this user?</p>
            <div>
              <Button variant="delete" onClick={handleDeleteUser}>
                Yes, I'm sure
              </Button>
              <Button variant="alternative" onClick={() => setIsModalOpen(false)}>
                No cancel
              </Button>
            </div>
          </YesNoContent>
        </Modal>
      )}
    </>
  );
};

export default DeleteUser;
