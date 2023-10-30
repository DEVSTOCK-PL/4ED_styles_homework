/* eslint-disable react/prop-types */
import styled from 'styled-components';

import { Mockup } from './Mockup';
import { RightContent } from './RightContent';

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 40px;
  gap: 80px;

  ${(props) => ({ flexDirection: props.flexDirection })}

  @media (max-width: 1024px) {
    gap: 40px;
  }

  @media (max-width: 768px) {
    padding: 16px 20px;
    gap: 20px;
  }
  @media (max-width: 640px) {
    flex-direction: column;
    padding: 16px 10px;
  }
`;

export const Row = ({ flexDirection, img, h2, p, buttonsArr }) => {
  return (
    <StyledDiv flexDirection={flexDirection}>
      <Mockup img={img} />
      <RightContent h2={h2} p={p} buttonsArr={buttonsArr} />
    </StyledDiv>
  );
};
