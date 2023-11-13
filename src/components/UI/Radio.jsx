import styled from "styled-components";

const RadioContainer = styled.label`
  display: block;
  cursor: pointer;
  input {
    display: none;
    &:checked + span {
      background-color: #1a56db;
      &:before {
        box-shadow: inset 0 0 0 0.4rem #1a56db;
      }
    }
  }
  span {
    border-radius: 50%;
    &:before {
      display: block;
      content: "";
      background-color: #fff;
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 50%;
      /* transition: 0.25s ease; */
      box-shadow: inset 0 0 1px 0.125rem #1a56db;
    }
  }
`;

const Radio = ({ role, active, handleCheckedItem }) => {
  return (
    <RadioContainer>
      <input type="radio" name="roles" value={role} checked={active === role} onChange={() => handleCheckedItem(role)} />
      <span></span>
    </RadioContainer>
  );
};

export default Radio;
