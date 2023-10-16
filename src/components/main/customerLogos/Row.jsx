/* eslint-disable react/prop-types */
import styled from 'styled-components';

const StyledRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
`;

export const Row = ({ children }) => {
  return <StyledRow>{children}</StyledRow>;
};
