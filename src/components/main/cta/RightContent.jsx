/* eslint-disable react/prop-types */
import styled from 'styled-components';

import { Button } from '../../Button';

const RightContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  width: 55%;

  @media (max-width: 1024px) {
    width: 75%;
  }

  @media (max-width: 640px) {
    width: 100%;
  }
`;

const StyledH2 = styled.h2`
  font-size: 36px;
  line-height: 45px;
`;
const StyledP = styled.p`
  font-size: 18px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 16px;
`;

const RightContentButton = styled(Button)`
  min-width: 152px;
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 14px;
  gap: 8px;
`;

const StyledImg = styled.img``;

export const RightContent = ({ h2, p, buttonsArr }) => {
  return (
    <RightContentContainer>
      <StyledH2>{h2}</StyledH2>
      <StyledP>{p}</StyledP>
      <ButtonsContainer>
        {buttonsArr.map((el) => (
          <RightContentButton key={el.id}>
            {el.text}
            {el.imgSrc && <StyledImg src={el.imgSrc} alt={el.imgAlt} />}
          </RightContentButton>
        ))}
      </ButtonsContainer>
    </RightContentContainer>
  );
};
