import styled from "styled-components";
import { XMarkIcon } from "../../assets";

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  backdrop-filter: blur(1px);
  transition: all 0.5s;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #1f2937;
  border: 1px solid #111928;
  border-radius: 10px;
  transition: all 0.5s;
  box-shadow: 8px 8px 10px -5px #111928;
  color: #fff;
`;

const XBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 40px;
  height: 40px;
  padding: 2px;

  &:hover {
    background-color: #111928;
    border-radius: 5px;
  }
`;
const Modal = ({ children, close }) => {
  return (
    <>
      <ModalWrapper>
        <ModalContainer>
          <XBtn onClick={close}>
            <XMarkIcon />
          </XBtn>
          {children}
        </ModalContainer>
      </ModalWrapper>
    </>
  );
};

export default Modal;
