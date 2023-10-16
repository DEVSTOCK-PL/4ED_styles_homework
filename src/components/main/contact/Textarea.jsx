/* eslint-disable react/prop-types */
import styled from 'styled-components';

const StyledLabel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
`;
const StyledTextarea = styled.textarea`
  padding: 14px 16px;
  border: 1px solid #4b5563;
  border-radius: 8px;
  background-color: #374151;
  color: #9ca3af;
  font-size: 16px;
  font-weight: 400;
  height: 190px;
`;

export const Textarea = () => {
  return (
    <StyledLabel>
      Your message
      <StyledTextarea />
    </StyledLabel>
  );
};
