/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { Container } from '../../Container';
import { Button } from '../../Button';

const StyledH2 = styled.h2`
  font-size: 36px;
  line-height: 45px;
`;
const StyledP = styled.p`
  font-size: 18px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 8px;
`;

const StyledImg = styled.img``;

export const RightContent = ({ h2, p, buttonsArr }) => {
  return (
    <Container flexDirection="column" alignItems="start" rowGap="24px">
      <StyledH2>{h2}</StyledH2>
      <StyledP>{p}</StyledP>
      <ButtonsContainer>
        {buttonsArr.map((el) => (
          <Button
            key={el.id}
            width="152px"
            borderRadius="8px"
            padding="10px 20px"
          >
            {el.text}
            {el.imgSrc && <StyledImg src={el.imgSrc} alt={el.imgAlt} />}
          </Button>
        ))}
      </ButtonsContainer>
    </Container>
  );
};
