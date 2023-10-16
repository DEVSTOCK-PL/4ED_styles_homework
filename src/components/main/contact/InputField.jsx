/* eslint-disable react/prop-types */
import styled from 'styled-components';

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
`;
const StyledInput = styled.input`
  padding: 14px 16px;
  border: 1px solid #4b5563;
  border-radius: 8px;
  background-color: #374151;
  color: #9ca3af;

  height: ${(props) => props.height};

  &::placeholder {
    font-size: 16px;
    font-weight: 400;
    color: #9ca3af;
  }
`;

export const InputField = ({ label, type, placeholder, height }) => {
  return (
    <StyledLabel>
      {label}
      <StyledInput type={type} placeholder={placeholder} height={height} />
    </StyledLabel>
  );
};
