/* eslint-disable react/prop-types */
import styled from 'styled-components';
import external_link from './external_link.svg';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  color: #9ca3af;

  @media (max-width: 768px) {
    padding: 26px;
  }
  @media (max-width: 640px) {
    padding: 16px;
  }
`;

const StyledImg = styled.img``;
const StyledP = styled.p`
  font-size: 16px;
`;
const StyledButton = styled.button`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  color: #9ca3af;
  background-color: transparent;
  border: 1px solid;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  gap: 8px;
`;

export const Card = ({ src }) => {
  return (
    <StyledDiv>
      <StyledImg src={src} alt="logo" />
      <StyledP>Partner since 2015</StyledP>
      <StyledButton>
        <img src={external_link} alt="logo_link" />
        Visit website
      </StyledButton>
    </StyledDiv>
  );
};
