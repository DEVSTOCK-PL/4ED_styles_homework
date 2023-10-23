/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { Cards } from './Cards';
import { Heading } from './Heading';
import { Cta } from './Cta';

const FundraisingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  padding: 96px 40px;
  background-color: #111928;
  gap: 32px;

  @media (max-width: 768px) {
    padding: 96px 20px;
  }
  @media (max-width: 640px) {
    /* justify-content: center; */
    padding: 32px 10px;
    gap: 16px;
  }
`;

export const Fundraising = ({ forEvents, disabledButton }) => {
  return (
    <FundraisingContainer>
      <Heading />
      <Cards disabledButton={disabledButton} />
      {forEvents && <Cards rowReverse disabledButton={disabledButton} />}
      {forEvents || <Cta />}
    </FundraisingContainer>
  );
};
